/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/build`,
    filename: 'app.min.js'
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
                  configFile: path.resolve(__dirname, 'tsconfig.json')
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        tsconfig: path.resolve(__dirname, './tsconfig.json')
      }
    }),
    new ESLintPlugin({ extensions: ['ts', 'tsx', 'js', 'jsx'] })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })]
  },
  devtool: isDev ? 'inline-source-map' : 'hidden-source-map'
};
