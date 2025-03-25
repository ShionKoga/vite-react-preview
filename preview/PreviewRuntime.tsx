import React from "react";
import ReactDOM from "react-dom/client";

const modules = import.meta.glob('/src/**/*.tsx', { eager: true });

const previews = Object.entries(modules)
  .filter(([_, mod]) => typeof mod.preview === "function")
  .map(([path, mod]) => ({
    name: path.split('/').slice(-1)[0].replace(/\\.tsx$/, ''),
    Component: mod.preview
  }));

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Component Previews</h1>
      <div style={{ display: 'grid', gap: 32 }}>
        {previews.map(({ name, Component }) => (
          <div key={name}>
            <h2>{name}</h2>
            <div style={{ border: '1px solid #ccc', padding: 16 }}>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);