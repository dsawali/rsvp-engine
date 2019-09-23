const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// For testing purposes
app.get('/hello', (req, res) => {
    res.json('HELLO WORLD!! PLSSS');
})

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

