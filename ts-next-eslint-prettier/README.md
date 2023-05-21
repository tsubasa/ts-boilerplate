# ts-next-eslint-prettier

## Using CSS Modules

### Install packages

```sh
$ yarn add --dev sass typed-scss-modules
```

### Edit `next.config.mjs`

```diff
 const nextConfig = {
+  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
 }
```

### Edit `package.json`

```diff
   "scripts": {
-    "develop": "next dev --turbo",
+    "develop": "run-p develop:*",
+    "develop:next": "next dev",
+    "develop:tsm": "typed-scss-modules src --watch --implementation sass --nameFormat none --exportType default --aliasPrefixes.@ src",
     "build": "next build",
```

## Using CSS in JS (styled-components)

### Install packages

```sh
$ yarn add --dev styled-components @types/styled-components postcss-styled-syntax
```

### Edit `.stylelintrc`

```diff
   "plugins": [
     "stylelint-order"
   ],
+  "customSyntax": "postcss-styled-syntax"
 }
```
