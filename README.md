# TypeScript ボイラープレートメモ

TypeScript環境を手軽に構築すること目的としたリポジトリです。

- ts-config-latest
  - 最新の tsconfig.json 確認用
- ts-node-eslint-prettier
  - Node + TypeScript の開発環境
- ts-browser-webpack-eslint-prettier
  - Browser + Webpack + TypeScript の開発環境
- ts-jsx-webpack-eslint-prettier
  - React + Webpack + TypeScript の開発環境 [Webpack]
- ts-jsx-vite-eslint-prettier
  - React + Vite + TypeScript の開発環境 [Vite]
- ts-sass-static-vite-eslint-stylelint-prittier
  - Browser + Vite + Sass + TypeScript の開発環境
- ts-orm-splite3
  - SQLite3 + TypeScript の開発環境
- ts-electron-react
  - Electron + React + TypeScript のアプリ開発環境

## ESLint 関連メモ

### eslint-config-* の設定比較

- https://zenn.dev/tapioca/articles/5685d794f6452b

### eslint-config-airbnb と eslint-config-airbnb-base の違い

React ベースで開発を行う場合は `eslint-config-airbnb` を利用し、それ以外の場合は `eslint-config-airbnb-base` を利用します。

- https://maku.blog/p/yfow6dk/
