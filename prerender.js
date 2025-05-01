// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const toAbsolute = (p) => path.resolve(__dirname, p)


const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')


  ; (async () => {
    const appHtml = await render(url)
    const html = template
      .replace(`<!--app-html-->`, appHtml)

    const filePath = `dist/static/index.html`
    fs.writeFileSync(toAbsolute(filePath), html)
  })()