const user = require('../../Model/User');
const express = require('express');

var router = express.Router();

router.post('/signup', (req, res) => {
    /* TODO: Check the validity of the request
        1. [DONE] Check the order of req.body (order: email, password, firstname, lastname) 
        2. [] Check whether all of the data exists or not (can this be the err from db instead?)
        3. [] Check whether the email is valid or not. also check the SQL injection ("and 1=1")
    */
    user.query_email_exist(req.body.email)
        .then(rows => {
            if(rows[0]){
                res.json('EMAIL EXIST!');
            } else {
                const user_data = [req.body.email, req.body.password, req.body.firstname, req.body.lastname]
                user.insert_user_data(user_data)
                    .then(result => res.json(result))
                    .catch(err => res.json(err.message));
            }
        }).catch(err => res.json(err.message));
})

module.exports = router;