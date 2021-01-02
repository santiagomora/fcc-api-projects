// server.js
// where your node app starts
require('dotenv').config();

global.config = require('./config/entry');

const express = require('express');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');

const router = require( config( 'path.routes' ) );

const app = express();

const APP_URL = config('app.url');

const PORT = config('app.port');

const FALLBACK_PORT = config('app.fallback_port');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use('/',router);

// listen for requests :)
app.listen(
    process.env.PORT||8000,
    //APP_URL,
    function(){
        console.log(`App is listening on ${PORT}`)
    }
);
