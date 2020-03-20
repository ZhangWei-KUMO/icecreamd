
module.exports = (modules) => {
  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          modules,
          targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
          },
          useBuiltIns: "usage"
        }
      ],
    ],
    plugins: [
      // "babel-plugin-inline-import-data-uri",
      "@babel/plugin-transform-member-expression-literals",
      "@babel/plugin-transform-object-assign",
      "@babel/plugin-transform-property-literals",
      ["@babel/plugin-transform-runtime", {
        helpers: false,
      },],
      "@babel/plugin-transform-spread",
      "@babel/plugin-transform-template-literals",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-object-rest-spread",
      [
        "@babel/plugin-proposal-decorators",
        { legacy: true }
      ],
      "@babel/plugin-proposal-class-properties"
    ]
  }
}