const express = require('express');

const { validation,url } = require( config( 'path.middleware' ) );

const {handle_create_url,handle_find_url} = require( config( 'path.controllers' ) ).url;

const { urlValidation,idValidation } = url;

const router = express.Router();

router.post(
    "/new",
    validation( urlValidation,'post' ),
    handle_create_url
);

router.get(
    "/:url_id",
    validation( idValidation,'get' ),
    handle_find_url
);

module.exports = router;
