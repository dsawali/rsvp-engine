const express = require('express');
var router = express.Router();

router.use('/user', require('./Routes/user'));
router.use('/event', require('./Routes/event'))
router.use('/attendee', require('./Routes/attendee'))

module.exports = router