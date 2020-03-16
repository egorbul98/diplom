// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const packagejson = require('./package.json');
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev);

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  // opimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devServer: {
    overlay: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: packagejson.browserslist
                })
              ],
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img',
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/fonts', to: 'fonts' },
    ]),
  ],
  devtool: isDev ? "source-map" : "",
}