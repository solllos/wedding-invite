// Pre-render the app into static HTML.

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const toAbsolute = (p) => path.resolve(__dirname, p)


const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')


  ; (async () => {
    const appHtml = await render(url)
    const html = template
      .replace(`<!--app-html-->`, appHtml)

    const filePath = `dist/index.html`
    fs.writeFileSync(toAbsolute(filePath), html)
  })()