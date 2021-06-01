const express = require('express');
const router = express.Router();

/* localhost:8000/api/create */

router.get('/create', (req, res) => {
    res.send('Create person ENDPOINT')
});

/* localhost:8000/api/update */
router.get('/update', (req, res) => {
    res.send('Update person ENDPOINT')
});


module.exports = router;