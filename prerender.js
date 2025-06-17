
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes that match the App.tsx Route definitions
const routesToPrerender = [
  '/',
  '/why-it-matters',
  '/ai-audit',
  '/about-us',
  '/pricing-contact',
  '/blog'
  // Note: /blog/:slug routes would need to be added manually with specific slugs
  // Example: '/blog/sample-post', '/blog/another-post'
]

// Helper function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure the directory exists before writing
      ensureDirectoryExists(absoluteFilePath)
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error.message)
    }
  }
})()
