const attendee = require('../../Model/Attendee');
const express = require('express');

var router = express.Router();

// how to bulk create for the EO? EO receives only emails of the attendees.
router.post('/create', (req, res) => {
    const attendee_data = [req.body.event_id, req.body.email, req.body.first_name, req.body.last_name];
    attendee.insert_attendee_data(attendee_data)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
})

router.get('/:attendee_id(\\d+)', (req, res) => {
    const attendee_id = req.params.attendee_id;
    attendee.query_event_attendees(attendee_id)
        .then(rows => res.json(rows[0]))
        .catch(err => res.json(err.message));
})

module.exports = router;