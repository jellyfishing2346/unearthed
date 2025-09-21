import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftsRouter from './routes/gifts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

// Serve static files from client/dist (Vite build)
app.use(express.static(path.join(__dirname, '../client/dist')))

// Serve static files from client/public
app.use('/public', express.static(path.join(__dirname, '../client/public')))
// Serve static files from client/public/scripts
app.use('/scripts', express.static(path.join(__dirname, '../client/public/scripts')))

// Add /gifts endpoint
app.use('/gifts', giftsRouter)

// Fallback: serve index.html for any other route (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})