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
        1. [DONE] Check the order of req.body (order: email, password, firstname, lastname) 
        2. [] Check whether all of the data exists or not (can this be the err from db instead?)
        3. [] Check whether the email is valid or not. also check the SQL injection ("and 1=1")
    */
    db.query_email_exist(req.body.email)
        .then(rows => {
            if(rows[0]){
                res.json('EMAIL EXIST!');
            } else {
                const user_data = [req.body.email, req.body.password, req.body.firstname, req.body.lastname]
                db.insert_user_data(user_data)
                    .then(result => res.json(result))
                    .catch(err => res.json(err.message));
            }
        }).catch(err => res.json(err.message));
})

app.post('/event/create', (req, res) => {
    const event_data = [req.body.owner_id, req.body.name, req.body.description || ''];
    db.insert_event_data(event_data)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
})

app.get('/event/:event_id', (req, res) => {
    const event_id = req.params.event_id;
    db.query_event_details(event_id)
        .then(rows => res.json(rows[0]))
        .catch(err => res.json(err.message));
})

app.listen(3030, () => 
    console.log('Express server is running on port 3030')
);

