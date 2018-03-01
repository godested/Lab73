const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '../'
          }
        }]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          }]
        })
      }]
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['./node_modules', './src']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: './src/scripts/lib',
        to: './lib'
      },
      {
        from: './src/assets',
        to: './assets'
      }])
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};