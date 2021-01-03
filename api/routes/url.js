const express = require('express');

const {url} = require( config( 'path.controllers' ) );

const router = express.Router();

const {handle_create_url,handle_redirect_url} = url;

router.post(
    "/new",
    handle_create_url
);

router.get(
    "/:short_url",
    handle_redirect_url
);

module.exports = router;
