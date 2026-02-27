require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getCanvasData } = require('./getCanvasData');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/canvas-data', async (req, res) => {

    try {
        const data = await getCanvasData();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Canvas data:', error);
        res.status(500).json({ error: 'Failed to fetch Canvas data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});