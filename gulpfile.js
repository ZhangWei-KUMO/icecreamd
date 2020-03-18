const path = require("path");
const { series, parallel } = require("gulp");
const gulp = require("gulp");

const babel = require("gulp-babel");
const rimraf = require("rimraf");
const webpack = require("webpack");
const through2 = require('through2');
const merge2 = require("merge2");
const transformLess = require('./transformLess');
const getBabelCommonConfig = require("./getBabelCommonConfig");
const cwd = process.cwd();
const libDir = path.join.apply(path, [cwd, "lib/"]);
const esDir = path.join.apply(path, [cwd, "es/"]);

// 在Babel中默认为modules，只有明确设置为false才会关闭
function compile(modules) {
  rimraf.sync(modules === false ? esDir : libDir);
  // 移动less文件并转译less文件成css文件
  const less = gulp.src(['components/**/*.less', 'components/*.less']).pipe(
    through2.obj(function (file, encoding, next) {
      // this.push(file.clone());
      transformLess(file.path)
        .then(css => {
          file.contents = Buffer.from(css);
          file.path = file.path.replace(/\.less$/, '.css');
          this.push(file);
          next();
        }).catch(err => {
          console.error(err);
        })
    })
  ).pipe(gulp.dest(modules === false ? esDir : libDir));
  const svg = gulp.src(['components/**/*.svg']).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone())
    })
  ).pipe(gulp.dest(modules === false ? esDir : libDir));

  const resource = ['components/**/*.jsx', 'components/*.js', 'components/**/*.js'];
  let jscode = gulp.src(resource);
  let jsStream = babelify(jscode, modules);
  console.log(jsStream)
  return merge2([less, jsStream, svg]);
};

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  let stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone());
      const content = file.contents.toString(encoding);
      file.contents = Buffer.from(content);
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

gulp.task("compile", series(parallel("compile-es", "compile-lib")));

exports.compile = gulp.task("compile")
exports.default = (done) => {
  console.log("请指定gulp任务");
  done();
};