const express = require('express');

const router = express.Router();

const validation_middleware = require('./validation/entry' );

//default middleware
router.use('/', express.static('public'));

//assign middlewares on current uri
function assign_middleware( handlers,router,uri ){
    return handlers.reduce(
        ( res_router,handler ) => res_router.use( uri,handler ),
        router
    );
}

//middleware assembler
function assign_handlers( mid_elem,router,base_uri ){
    const {uri,handlers,children} = mid_elem,
        res_router =  assign_middleware( handlers,router,uri );
    return ( children.length>0 )
        ? middleware_map( children,res_router )
        : res_router;
}

//middleware recursive map
function middleware_map( mid_children,router ){
    return mid_children.reduce(
        ( res_router,mid_elem ) => assign_handlers(
            mid_elem,
            res_router
        ),
        router
    )
}

module.exports = middleware_map( validation_middleware,router );
