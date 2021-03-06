module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.(js|jsx)$/,
          query: {
            plugins: [
              ["@babel/plugin-transform-modules-commonjs", {
                allowTopLevelThis: false
              }]
            ],
            presets: [["@babel/env", { targets: { node: 6 } }]]
          }
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: "svg-react-loader"
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: ["file-loader"]
        }
      ]
    }
  },
  sections: [
    {
      name: "Icecream UI library",
      content: "examples/introduction.md"
    },
    {
      name: "Tip",
      content: "examples/tip.md",
      components: "/components/Tip/*.jsx"
    },
    {
      name: "Loading",
      content: "examples/loading.md",
      components: "/components/Loading/*.jsx"
    },
    {
      name: "IconCard",
      content: "examples/IconCard.md",
      components: "/components/IconCard/*.jsx"
    },
    {
      name: "Modal",
      content: "examples/modal.md",
      components: "/components/Modal/*.jsx"
    },
    {
      name: "Button",
      content: "examples/button.md",
      components: "/components/Button/*.jsx"
    },
    {
      name: "Alert",
      content: "examples/alert.md",
      components: "/components/Alert/*.jsx"
    },
    {
      name: "Header",
      content: "examples/header.md",
      components: "/components/Header/*.jsx"
    }, {
      name: "GradientBar",
      content: "examples/components.md",
      components: "/components/GradientBar/*.jsx",
      exampleMode: "expand",
      usageMode: "expand"
    },
    {
      name: "Card",
      content: "examples/card.md",
      components: "/components/Card/*.jsx",
      exampleMode: "expand",
      usageMode: "expand"
    },
    {
      name: "Footer",
      content: "examples/footer.md",
      components: "/components/Footer/*.jsx",
      exampleMode: "expand",
      usageMode: "expand"
    }
  ]
};
