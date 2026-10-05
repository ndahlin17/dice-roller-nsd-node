const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// cors condition + failure when modified
app.use(cors());

// Serve files from the static folder- ChatGPT aided with this
app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/wake', (req, res) => {
    res.json({
        message: 'Dice Roller server is awake!'
    });
});

// Roll
app.get('/api/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;

    res.json({
        roll: roll
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
