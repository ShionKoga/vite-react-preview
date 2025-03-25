import { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

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
        return id + '.tsx'
      }
    },
    load(id) {
      if (id === '/@vite-react-preview/runtime.tsx') {
        const runtimePath = path.resolve(__dirname, '../preview/PreviewRuntime.tsx')
        return fs.readFileSync(runtimePath, 'utf-8')
      }
    }
  }
}
