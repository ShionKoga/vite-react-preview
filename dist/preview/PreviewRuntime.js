import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
const modules = import.meta.glob('/src/**/*.tsx', { eager: true });
const previews = Object.entries(modules)
    .filter(([_, mod]) => typeof mod.preview === "function")
    .map(([path, mod]) => ({
    name: path.split('/').slice(-1)[0].replace(/\\.tsx$/, ''),
    Component: mod.preview
}));
function App() {
    return (_jsxs("div", { style: { padding: 32 }, children: [_jsx("h1", { children: "Component Previews" }), _jsx("div", { style: { display: 'grid', gap: 32 }, children: previews.map(({ name, Component }) => (_jsxs("div", { children: [_jsx("h2", { children: name }), _jsx("div", { style: { border: '1px solid #ccc', padding: 16 }, children: _jsx(Component, {}) })] }, name))) })] }));
}
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(App, {}));
