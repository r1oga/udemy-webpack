const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // ends with .js
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]

}

module.exports = config
