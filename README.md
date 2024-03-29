# TypeScript ボイラープレートメモ

TypeScript環境を手軽に構築すること目的としたリポジトリです。

| name | description |
| ---- | ---- |
| [ts-config-latest](ts-config-latest) | 最新の tsconfig.json 確認用 |
| [ts-node-eslint-prettier](ts-node-eslint-prettier) | `Node`, `TypeScript` |
| [ts-browser-webpack-eslint-prettier](ts-browser-webpack-eslint-prettier) | `Browser`, `Webpack`, `TypeScript` |
| [ts-jsx-webpack-eslint-prettier](ts-jsx-webpack-eslint-prettier) | `React`, `Webpack`, `TypeScript` |
| [ts-jsx-vite-eslint-prettier](ts-jsx-vite-eslint-prettier) | `React`, `Vite`, `TypeScript` |
| [ts-next-eslint-prettier](ts-next-eslint-prettier) | `Next`, `TypeScript` |
| [ts-sass-static-vite-eslint-stylelint-prettier](ts-sass-static-vite-eslint-stylelint-prettier) | `Browser`, `Vite`, `Sass`, `TypeScript` |
| [ts-orm-sqlite3](ts-orm-sqlite3) | `SQLite3`, `TypeScript` |
| [ts-electron-react](ts-electron-react) | `Electron`, `React`, `TypeScript` |

## Webpack 関連メモ

### webpack.config の TypeScript 化

- [公式ドキュメント](https://webpack.js.org/configuration/configuration-languages/#typescript)

#### 必須パッケージインストール

```
$ yarn add --dev webpack ts-node
```

最新バージョンでは `@types/webpack` や `@types/webpack-dev-server` などの定義は不要

#### tsconfig.json の修正

```json
{
  "compilerOptions": {
    "module": "ESNext",
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

#### webpackDevServer を利用する場合

```ts
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default {
  // ...
  // devServerConfig
  devServer: {
    // ...
  } satisfies DevServerConfiguration
} satisfies Configuration;
```

## ESLint 関連メモ

### eslint-config-* の設定比較

- https://zenn.dev/tapioca/articles/5685d794f6452b

### eslint-config-airbnb と eslint-config-airbnb-base の違い

React ベースで開発を行う場合は `eslint-config-airbnb` を利用し、それ以外の場合は `eslint-config-airbnb-base` を利用します。

- https://maku.blog/p/yfow6dk/

### eslint-config-airbnb-typescript の設定方法

React ベースで開発を行う場合は `airbnb-typescript` を利用し、それ以外の場合は `airbnb-typescript/base` を利用します。

- https://github.com/iamturns/eslint-config-airbnb-typescript
