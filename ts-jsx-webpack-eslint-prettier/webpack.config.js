/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.entries(env || {}).reduce((acc, [k, v]) => {
  acc[`process.env.${k}`] = JSON.stringify(v);
  return acc;
}, {});

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/build`,
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  configFile: path.resolve(__dirname, isDev ? 'tsconfig.json' : 'tsconfig.prod.json'),
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
      },
    }),
    new ESLintPlugin({ extensions: ['ts', 'tsx', 'js', 'jsx'] }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
  devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
  devServer: {
    compress: true,
    https: true,
    open: true,
    hot: true,
  },
};
