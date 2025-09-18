import express from 'express'

const app = express()

// Serve static files from client/public
app.use('/public', express.static('../client/public'))
// Serve static files from client/public/scripts
app.use('/scripts', express.static('../client/public/scripts'))

// Root route
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})