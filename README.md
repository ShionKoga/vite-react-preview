# vite-react-preview

[![npm version](https://badge.fury.io/js/vite-react-preview.svg)](https://badge.fury.io/js/vite-react-preview)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vite-react-preview)](https://bundlephobia.com/package/vite-react-preview)
[![license](https://img.shields.io/npm/l/vite-react-preview.svg)](https://github.com/your-username/vite-react-preview/blob/main/LICENSE)


> A minimal Vite plugin that brings a SwiftUI-style preview experience to React components.

## ✨ Features

- Define `export const preview = () => <MyComponent />` in your components
- Instantly preview any component on a dedicated route: `http://localhost:5173/__preview`
- Auto-discovers all `preview` exports in your codebase
- Powered by native Vite + React, with hot module reload
- Lightweight and zero-config

---

## 🚀 Installation

```bash
npm install vite-react-preview --save-dev
```

---

## ⚙️ Usage

### 1. Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preview from 'vite-react-preview'

export default defineConfig({
  plugins: [react(), preview()],
})
```

---

### 2. Export `preview` from any component file:

```tsx
// src/components/Button.tsx

export const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>
}

export const preview = () => <Button label="Click me!" />
```

---

### 3. Start dev server and open:

```bash
npm run dev
```

Then visit:

```
http://localhost:5173/__preview
```

---

## 📁 File Structure Example

```
src/
├── components/
│   ├── Button.tsx         # contains `export const preview = ...`
│   ├── Card.tsx           # also exports `preview`
```

All such `preview` exports will be automatically rendered.

---

## 🧪 Local Development

You can use the plugin in a local app via `npm link`:

```bash
npm link
cd your-app/
npm link vite-react-preview
```

---

## 📦 Publishing

This plugin is designed to be consumed as a dev-only tool. Make sure it's listed in `devDependencies`.

---

## 📄 License

MIT

---

## 🙏 Acknowledgements

Inspired by the simplicity and developer experience of SwiftUI's `#Preview`.

---
