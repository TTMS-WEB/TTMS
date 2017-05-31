var express = require('express');
var router = express.Router();

router.use('/',require('./loginRegister'));
router.use('/',require('./studios'));
router.use('/',require('./employees'));
router.use('/',require('./seat'));

module.exports = router;