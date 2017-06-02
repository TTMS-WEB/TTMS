const express = require('express');
const router = express.Router();

router.use('/',require('./loginRegister'));
router.use('/',require('./studios'));
router.use('/',require('./employees'));
router.use('/',require('./seat'));
router.use('/',require('./showPlay'));
router.use('/',require('./ticket'));
router.use('/',require('./sale'));

module.exports = router;