const express = require('express');
const router = express.Router();


const { createRegister, login } = require('../controllers/auth');


/* localhost:8000/api/register */

router.get('/register', createRegister);

/* localhost:8000/api/login */
router.get('/login', login);



module.exports = router;