const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

require('./database/connect').connect();
const db = require('./database/operations');
db.init_all_table();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// For testing purposes
app.get('/hello', (req, res) => {
    res.json('HELLO WORLD!! PLSSS');
})

app.post('/user/create', (req, res) => {
    /* TODO: Check the validity of the request
        1. Check the order of req.body (order: email, password, firstname, lastname)
        2. Check whether all of the data exists or not (can this be the err from db instead?)
        3. Check whether the email is valid or not. also check the SQL injection ("and 1=1")
    */
    db.query_email_exist(req.body.email, async (rows) => {
        if(rows[0]){
            res.json('EMAIL EXIST!');
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 5);
            const user_data = Object.values(req.body);
            await db.insert_user_data(user_data);
            res.json('USER CREATED');
        }
    })
})

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

