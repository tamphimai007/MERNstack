const express = require('express');
const router = express.Router();

/* localhost:8000/api/create */

router.get('/create-org', (req, res) => {
    res.send('Create org ENDPOINT')
});

/* localhost:8000/api/update */
router.get('/update-org', (req, res) => {
    res.send('Update org ENDPOINT')
});


module.exports = router;