const attendee = require('../Model/Attendee');
const uuidv4 = require('uuid/v4');
const uuidRegex = "([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})?";

const express = require('express');
var router = express.Router();

// how to bulk create for the EO? EO receives only emails of the attendees.
router.post('/create', (req, res) => {
    const uuid = uuidv4()
    const attendee_data = [uuid, req.body.event_id, req.body.email, req.body.first_name || "", req.body.last_name || ""];
    attendee.insert_attendee_data(attendee_data)
        .then(result => {
            if(result.rowCount) {
                attendee.query_attendee_detail(uuid)
                    .then(ret => res.json(ret.rows[0]))
                    .catch(err => res.json(err.message)); 
            }
        })
        .catch(err => res.json(err.message));
})

router.get(`/:attendee_id(${uuidRegex})`, (req, res) => {
    const attendee_id = req.params.attendee_id;
    attendee.query_attendee_detail(attendee_id)
        .then(ret => res.json(ret.rows[0]))
        .catch(err => res.json(err.message));
})

module.exports = router;