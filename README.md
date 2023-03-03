# TypeScript ボイラープレートメモ

TypeScript環境を手軽に構築すること目的としたリポジトリです。

| name | description |
| ---- | ---- |
| [ts-config-latest](ts-config-latest) | 最新の tsconfig.json 確認用 |
| [ts-node-eslint-prettier](ts-node-eslint-prettier) | `Node`, `TypeScript` |
| [ts-browser-webpack-eslint-prettier](ts-browser-webpack-eslint-prettier) | `Browser`, `Webpack`, `TypeScript` |
| [ts-jsx-webpack-eslint-prettier](ts-jsx-webpack-eslint-prettier) | `React`, `Webpack`, `TypeScript` |
| [ts-jsx-vite-eslint-prettier](ts-jsx-vite-eslint-prettier) | `React`, `Vite`, `TypeScript` |
| [ts-sass-static-vite-eslint-stylelint-prettier](ts-sass-static-vite-eslint-stylelint-prettier) | `Browser`, `Vite`, `Sass`, `TypeScript` |
| [ts-orm-sqlite3](ts-orm-sqlite3) | `SQLite3`, `TypeScript` |
| [ts-electron-react](ts-electron-react) | `Electron`, `React`, `TypeScript` |

## ESLint 関連メモ

### eslint-config-* の設定比較

- https://zenn.dev/tapioca/articles/5685d794f6452b

### eslint-config-airbnb と eslint-config-airbnb-base の違い

React ベースで開発を行う場合は `eslint-config-airbnb` を利用し、それ以外の場合は `eslint-config-airbnb-base` を利用します。

- https://maku.blog/p/yfow6dk/
