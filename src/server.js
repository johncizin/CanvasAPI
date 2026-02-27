import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getCanvasDomainData } from './services/canvasService.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


dotenv.config({path: path.resolve(__dirname, '../.env')})

const app = express()
const PORT = process.env.PORT

// Middleware
app.use(express.json())

// Serve static frontend (public/index.html)
app.use(express.static(path.join(__dirname, '../public')))

const BASE_URL = process.env.BASE_URL
const CANVAS_TOKEN= process.env.CANVAS_TOKEN
// API Route
app.get('/api/canvas', async (req, res) => {
  try {
    const courses = await getCanvasDomainData(
      CANVAS_TOKEN,
      BASE_URL
    )

    res.json(courses) // toJSON auto-called if defined
  } catch (err) {
    console.error('Canvas error:', err)
    res.status(500).json({ error: 'Failed to fetch Canvas data' })
  }
})


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}: http://localhost:${PORT}`)
})