import { Plugin } from 'vite'
import fs from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default function reactPreviewPlugin(): Plugin {
  return {
    name: 'vite-react-preview',
    configureServer(server) {
      server.middlewares.use('/__preview', async (_, res) => {
        const html = await server.transformIndexHtml('/__preview', `
          <!DOCTYPE html>
          <html lang="en">
            <head><meta charset="UTF-8" /></head>
            <body>
              <div id="root"></div>
              <script type="module" src="/@vite-react-preview/runtime"></script>
            </body>
          </html>
        `)
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      })
    },
    resolveId(id) {
      if (id === '/@vite-react-preview/runtime') {
        return id + '.js'
      }
    },
    load(id) {
      if (id === '/@vite-react-preview/runtime.js') {
        const runtimePath = resolve(__dirname, '../preview/PreviewRuntime.js')
        return fs.readFileSync(runtimePath, 'utf-8')
      }
    }
  }
}
