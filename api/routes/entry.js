const express = require('express');

const timeRoutes = require('./time');

const usageRoutes = require('./usage');

const router = require( config('path.middleware') );

const base_uri = config('api.base_uri');

// route methods
router.use('',usageRoutes);

// route methods
router.use(`${base_uri}/timestamp`,timeRoutes);

module.exports = router;
