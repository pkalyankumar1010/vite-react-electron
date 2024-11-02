# Vite + React + Electron + TypeScript

Setup to make a Cross platform app using React and Electron

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Installation commads

```
npm create vite@latest vite-electron-app
mv vite-electron-app/\* .
cat vite-electron-app/.gitignore >> .gitignore
rm -rf vite-electron-app
npm install
npm install electron --save-dev
npm install concurrently --save-dev
npm install electron-packager --save-dev
npm install electron-is-dev
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

## Create a main.cjs

## Add following in each section in package.json

```json
  "scripts": {
    "electron": "electron .",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "build-electron": "npm run build && electron-builder",
    "build-forge": "npm run build && npm run make",
    "start": "concurrently \"npm run dev\" \"npm run electron\""
  },
  "author": "kalyan",
  "description": "testing app",
  "main": "main.cjs",
  "build": {
    "appId": "com.kalyan.app",
    "files": [
      "dist/**/*",
      "main.cjs"
    ],
    "win": {
      "target": "nsis"
    }
  },
```

Rename forge.config.js to force.config.cjs

## To launch dev server

```
npm run vite-electron-start
```

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](/src/assets/electron_demo.png)

## To build app

```
npm run build-forge
```
