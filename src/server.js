const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/user', require('./Routes/user'));
app.use('/event', require('./Routes/event'))
app.use('/attendee', require('./Routes/attendee'))

// For testing purposes
app.get('/hello', (req, res) => {
    res.json('HELLO WORLD!! PLSSS');
})

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

