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
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: ['file-loader']
        },
      ]
    }
  },
  sections: [
    {
      name: 'Icecream UI library',
      content: 'examples/introduction.md'
    },

    {
      name: 'Button',
      content: 'examples/button.md',
      components: '/components/Button/*.jsx'
    },
    {
      name: 'Alert',
      content: 'examples/alert.md',
      components: '/components/Alert/*.jsx'
    },
    {
      name: 'Header',
      content: 'examples/header.md',
      components: '/components/Header/*.jsx'
    }, {
      name: 'Icon',
      content: 'examples/icon.md',
      components: '/components/Icon/*.jsx'
    },
    {
      name: 'GradientBar',
      content: 'examples/components.md',
      components: '/components/GradientBar/*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    },
  ]
}