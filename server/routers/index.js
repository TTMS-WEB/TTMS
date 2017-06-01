const express = require('express');
const router = express.Router();

router.use('/',require('./loginRegister'));
router.use('/',require('./studios'));
router.use('/',require('./employees'));
router.use('/',require('./seat'));
router.use('/',require('./showPlay'));

module.exports = router;