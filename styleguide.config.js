module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    }
  },
  sections: [
    {
      name: 'Icecream UI library',
      content: 'examples/introduction.md'
    },
    {
      name: 'Components',
      content: 'examples/components.md',
      components: '/components/GradientBar/*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    },
    {
      name: 'Alert',
      content: 'examples/alert.md',
      components: '/components/Alert/*.jsx'
    }
  ]
}