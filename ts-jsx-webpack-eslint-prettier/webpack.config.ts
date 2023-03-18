import path from 'path';
import webpack, { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import dotenv from 'dotenv';

const env = dotenv.config().parsed;
const envKeys = Object.entries(env || {}).reduce<Record<string, string>>((acc, [k, v]) => {
  acc[`process.env.${k}`] = JSON.stringify(v);
  return acc;
}, {});

const isDev = process.env.NODE_ENV === 'development';

export default {
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
                  configFile: path.resolve(__dirname, 'tsconfig.json'),
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
        configFile: path.resolve(__dirname, './tsconfig.json'),
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
  } satisfies DevServerConfiguration,
} satisfies Configuration;
