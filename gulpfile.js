const path = require("path");
const { series, parallel } = require("gulp");
const gulp = require("gulp");
const argv = require('minimist')(process.argv.slice(2));
const babel = require("gulp-babel");
const rimraf = require("rimraf");
const webpack = require("webpack");
const through2 = require('through2');
const merge2 = require("merge2");
const transformLess = require('./utils/transformLess');
const getBabelCommonConfig = require("./utils/getBabelCommonConfig");
const cwd = process.cwd();
const libDir = path.join.apply(path, [cwd, "lib/"]);
const esDir = path.join.apply(path, [cwd, "es/"]);
const getProjectPath = require("./utils/getProjectPath");
const packageJson = require(getProjectPath('package.json'));
const runCmd = require("./utils/runCmd");
// 在Babel中默认为modules，只有明确设置为false才会关闭
function compile(modules) {
  rimraf.sync(modules === false ? esDir : libDir);
  // 移动less文件并转译less文件成css文件
  const less = gulp.src(['components/**/*.less', 'components/*.less', 'components/**/**/*.less']).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone());
      transformLess(file.path)
        .then(css => {
          file.contents = Buffer.from(css);
          // convert less files into css files
          file.path = file.path.replace(/\.less$/, '.css');
          this.push(file);
          next();
        }).catch(err => {
          console.error(err);
        })
    })
  ).pipe(gulp.dest(modules === false ? esDir : libDir));
  // clone svg files into target diractories
  const svg = gulp.src(['components/**/*.svg']).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone())
    })
  ).pipe(gulp.dest(modules === false ? esDir : libDir));

  const resource = ['components/**/*.jsx', 'components/*.js', 'components/**/*.js'];
  let jscode = gulp.src(resource);
  // compile Javascript files
  let jsStream = babelify(jscode, modules);
  return merge2([less, jsStream, svg]);
};

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  let stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone());
      const content = file.contents.toString(encoding);
      let newContent = content.replace(/\.less/g, '.css')
      file.contents = Buffer.from(newContent);
      this.push(file)
      next();
    })
  );
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir))
}

gulp.task("compile-es", done => {
  console.log("生成es文件夹...");
  compile(false);
  done()
});

gulp.task("compile-lib", done => {
  console.log("生成lib文件夹...");
  compile()
  done()
});

/**
 *  发布NPM新版本
 *  npm run pub --npm-tag=0.2.1
 * */
gulp.task("pub", done => {
  const versionFine = packageJson.version.match(/^\d+\.\d+\.\d+$/);
  let tagString;
  if (argv['npm-tag']) {
    tagString = argv['npm-tag'];
  }
  if (!tagString && versionFine) {
    tagString = 'next';
  }
  let args = ['publish'].concat(['--tag', tagString])
  console.log(args)
  runCmd("npm", args, code => {
    console.log(code);
    done();

  })

})

gulp.task("compile", series(parallel("compile-es", "compile-lib")));

exports.compile = gulp.task("compile");
exports.pub = gulp.task("pub");

exports.default = (done) => {
  console.log("请指定gulp任务");
  done();
};