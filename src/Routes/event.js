const event = require('../Model/Event');
const uuidv4 = require('uuid/v4');
const uuidRegex = "([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})?";

const express = require('express');
var router = express.Router();

router.post('/create', (req, res) => {
    const uuid = uuidv4();
    const event_data = [uuid, req.body.owner_id, req.body.name, req.body.description || ''];
    event.insert_event_data(event_data)
        .then(result => {
            if(result.rowCount) {
                event.query_event_detail(uuid)
                    .then(ret => res.json(ret.rows[0]))
                    .catch(err => res.json(err.message)) 
            }
        })
        .catch(err => res.json(err.message));
})

router.get(`/:event_id(${uuidRegex})`, (req, res) => {
    const event_id = req.params.event_id;
    event.query_event_detail(event_id)
        .then(ret => res.json(ret.rows[0]))
        .catch(err => res.json(err.message));
})

router.get(`/:event_id(${uuidRegex})/attendee`, (req, res) => {
    const event_id = req.params.event_id;
    event.query_event_attendees(event_id)
        .then(ret => res.json(ret.rows))
        .catch(err => res.json(err.message));
})

module.exports = router;