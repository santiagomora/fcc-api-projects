const express = require('express');

const time_routes = require('./time');

const usage_routes = require('./usage');

const header_routes = require('./header');

const router = require( config('path.middleware') );

const base_uri = config('api.base_uri');

// route methods
router.use('',usage_routes);

// route methods
router.use(`${base_uri}/timestamp`,time_routes);

// route methods
router.use(`${base_uri}/whoami`,header_routes);

module.exports = router;
