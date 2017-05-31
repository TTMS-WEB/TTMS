var express = require('express');
var router = express.Router();

router.use('/ttms',require('./loginRegister'));
router.use('/ttms',require('./studios'));

module.exports = router;