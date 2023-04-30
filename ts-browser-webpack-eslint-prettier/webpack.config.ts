import path from 'path';
import type { Configuration } from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

export default {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
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
} satisfies Configuration;
