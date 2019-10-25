const event = require('../Model/Event');
const express = require('express');

var router = express.Router();

router.post('/create', (req, res) => {
    const event_data = [req.body.owner_id, req.body.name, req.body.description || ''];
    event.insert_event_data(event_data)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
})

router.get('/:event_id(\\d+)', (req, res) => {
    const event_id = req.params.event_id;
    event.query_event_details(event_id)
        .then(rows => res.json(rows[0]))
        .catch(err => res.json(err.message));
})

module.exports = router;