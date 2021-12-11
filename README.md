# TypeScript ボイラープレートメモ

TypeScript環境を手軽に構築すること目的としたリポジトリです。

- ts-config-latest
  - 最新の TypeScript の tsconfig を確認するためのディレクトリ
- ts-eslint-prettier
  - Node ベースの TS 開発環境
- ts-browser-webpack-eslint-prettier
  - ブラウザベースの TS 開発環境
- ts-jsx-webpack-eslint-prettier
  - React ベースの TS 開発環境

## ESLint 関連メモ

### eslint-config-* の設定比較

- https://zenn.dev/tapioca/articles/5685d794f6452b

### eslint-config-airbnb と eslint-config-airbnb-base の違い

React ベースで開発を行う場合は `eslint-config-airbnb` を利用し、それ以外の場合は `eslint-config-airbnb-base` を利用します。

- https://maku.blog/p/yfow6dk/
