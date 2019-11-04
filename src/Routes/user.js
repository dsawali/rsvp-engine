const user = require('../Model/User');
const uuidv4 = require('uuid/v4');
const express = require('express');
const uuidRegex = "([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})?";

var router = express.Router();

router.post('/signup', (req, res) => {
    /* TODO: Check the validity of the request
        1. [DONE] Check the order of req.body (order: email, password, firstname, lastname) 
        2. [] Check whether all of the data exists or not (can this be the err from db instead?)
        3. [] Check whether the email is valid or not. also check the SQL injection ("and 1=1")
    */
    user.query_email_exist(req.body.email)
        .then(email_ret => {
            if(email_ret.rowCount){
                res.json('EMAIL EXIST!');
            } else {
                const uuid = uuidv4();
                const user_data = [uuid, req.body.email, req.body.password, req.body.firstname, req.body.lastname]
                user.insert_user_data(user_data)
                    .then(result => {
                        if(result.rowCount) 
                        user.query_user_detail(uuid)
                            .then(ret => res.json(ret.rows[0]))
                            .catch(err => res.json(err.message)) 
                    })
                    .catch(err => res.json(err.message));
            }
        }).catch(err => res.json(err.message));
})

router.get(`/:user_id(${uuidRegex})`, (req, res) => {
    const user_id = req.params.user_id;
    user.query_user_detail(user_id)
        .then(ret => res.json(ret.rows[0]))
        .catch(err => res.json(err.message));
})

router.get(`/:user_id(${uuidRegex})/event`, (req, res) => {
    const user_id = req.params.user_id;
    user.query_user_events(user_id)
        .then(ret => res.json(ret.rows))
        .catch(err => res.json(err.message));
})

module.exports = router;