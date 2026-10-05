const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from your Azure Static Web App
app.use(cors());

// Serve files from the static folder
app.use(express.static(path.join(__dirname, 'static')));

// Wake-up API
app.get('/api/wake', (req, res) => {
    res.json({
        message: 'Dice Roller server is awake!'
    });
});

// Roll one six-sided die
app.get('/api/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;

    res.json({
        roll: roll
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});