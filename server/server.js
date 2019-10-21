const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./database/db')
app.use('/', require('./Router/route'))

// For testing purposes
app.get('/hello', (req, res) => {
    res.json('HELLO WORLD!! PLSSS');
})

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

