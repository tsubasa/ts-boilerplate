import path from 'path';
import dotenv from 'dotenv';
import { Configuration as WebpackConfiguration, DefinePlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

const env = dotenv.config({
  path: isDev ? path.resolve(__dirname, './.env') : path.resolve(__dirname, './.env.production'),
}).parsed;
const envKeys = Object.entries(env || {}).reduce<Record<string, string>>((acc, [k, v]) => {
  acc[`process.env.${k}`] = JSON.stringify(v);
  return acc;
}, {});

const base: Configuration = {
  mode: isDev ? 'development' : 'production',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDev ? undefined : './',
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(bmp|ico|gif|jpe?g|png|svg|ttf|eot|woff?2?|wav)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new DefinePlugin(envKeys)],
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
};

const main: Configuration = merge(base, {
  name: 'main',
  target: 'electron-main',
  entry: {
    main: './src/main.ts',
  },
});

const preload: Configuration = merge(base, {
  name: 'preload',
  target: 'electron-preload',
  entry: {
    preload: './src/preload.ts',
  },
});

const renderer: Configuration = merge(base, {
  name: 'renderer',
  target: 'web',
  entry: {
    renderer: './src/renderer.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: isDev
    ? {
        hot: 'only',
        host: '0.0.0.0',
        port: '8080',
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
      }
    : undefined,
});

export default [main, preload, renderer];
