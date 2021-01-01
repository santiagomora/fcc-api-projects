const express = require('express');

const {time} = require(config('path.controllers'));

const router = express.Router();

const {handle_date,handle_epoch,handle_empty} = time;

router.get(
    "/:date/:format",
    handle_date
);

router.get(
    "/:date",
    handle_epoch
);

router.get(
    "/",
    handle_empty
);

module.exports = router;
