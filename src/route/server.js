//main injecttion point
import express from 'express'
import { getCanvasDomainData } from '../services/canvasService.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/api/canvas', async (req, res) => {
  try {
    const courses = await getCanvasDomainData(
      process.env.CANVAS_TOKEN,
      process.env.CANVAS_BASE_URL
    )

    res.json(courses) // toJSON auto runs
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch Canvas data' })
  }
})

app.listen(3000 , () => {
  console.log('Server running on port 3000: http://localhost:3000')
});