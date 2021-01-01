const express = require('express');

const {usage} = require(config('path.controllers'));

const router = express.Router();

router.get('/',usage.handleGet);

module.exports = router;
