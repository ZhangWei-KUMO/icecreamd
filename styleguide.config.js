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
      content: 'examples/card.md',
      components: '/components/**/*.jsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
}