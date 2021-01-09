const express = require('express');

const cors = require('cors');

const body_parser = require('body-parser');

const time_routes = require('./time');

const header_routes = require('./header');

const url_routes = require('./url');

const router = express.Router();

const mount_middleware = require( config('path.middleware') );

const base_uri = config('api.base_uri');

const CORS_OPTIONS = config( 'cors.options' );

router.use( body_parser.json() );

router.use( cors() )//cors( CORS_OPTIONS ) );  //some legacy browsers choke on 204

router.use( '/',express.static( `${config('path.build')}` ) );

mount_middleware( router );

router.use(`${base_uri}/timestamp`,time_routes);

router.use(`${base_uri}/whoami`,header_routes);

router.use(`${base_uri}/shorturl`,url_routes);

module.exports = router;
