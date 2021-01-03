require('dotenv').config();

global.config = require('./config/entry');

const express = require('express');

const mongoose = require('mongoose');

const router = require( config( 'path.routes' ) );

const app = express();

const APP_URL = config('app.url');

const PORT = config('app.port');

const FALLBACK_PORT = config('app.fallback_port');

const DB_URI = config( 'mongo.db_uri' );

const CONNECTION_CONF = config( 'mongo.mongoose.connection' );

try{
    mongoose.connect( DB_URI,CONNECTION_CONF );
} catch( e ){
    console.error(e);
}

app.use('/',router);

// listen for requests :)
app.listen(
    process.env.PORT||8000,
    //APP_URL,
    function(){
        console.log(`App is listening on ${PORT}`)
    }
);
