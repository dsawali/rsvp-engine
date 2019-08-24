const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

