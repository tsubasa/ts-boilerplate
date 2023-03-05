# ts-jsx-vite-eslint-prettier

## Styling

### How to use Styled

1. install styled-components

```bash
$ yarn add --dev styled-components
```

2. create Styled-Components

```jsx
import styled from 'styled-components';

const FooStyled = styled.div`
  color: red;
`;

const Foo = () => <FooStyled>Hello World</FooStyled>;
```

### How to use CSS modules

1. install sass & sass module plugin

```bash
$ yarn add --dev sass vite-plugin-sass-dts
```

2. update `vite.config.ts`

```diff
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -1,6 +1,7 @@
 import path from 'path';
 import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';
+import sassDts from 'vite-plugin-sass-dts';

 export default defineConfig({
   root: 'src',
@@ -8,6 +9,21 @@ export default defineConfig({
   build: {
     outDir: '../dist',
   },
+  css: {
+    preprocessorOptions: {
+      scss: {
+        additionalData: `@use "@/styles" as common;`,
+        importer(...args) {
+          if (args[0] !== '@/styles') {
+            return undefined;
+          }
+          return {
+            file: `${path.resolve(__dirname, './src/styles')}`,
+          };
+        },
+      },
+    },
+  },
   resolve: {
     alias: [
       {
@@ -16,5 +32,14 @@ export default defineConfig({
       },
     ],
   },
-  plugins: [react()],
+  plugins: [
+    react(),
+    sassDts({
+      enabledMode: ['development', 'production'],
+      global: {
+        generate: true,
+        outFile: path.resolve(__dirname, './src/styles/style.d.ts'),
+      },
+    }),
+  ],
 });
```

3. create `src/styles/App.module.scss`;

```scss
.app {
  color: red;
}
```

4. start develop

```bash
$ yarn develop
```

After `yarn develop`, `src/styles/App.module.scss.d.ts` and `src/styles/style.d.ts` are created.

5. using

```jsx
import AppStyle from '@/style/App';

const App = () => <div className={AppStyle.app}>Hello World</div>;
```
