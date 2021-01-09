const express = require('express');

const validation_middleware = [
    require('./validation/date/date'),
    require('./validation/url/url')
];

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

function mount_middleware( router ){
    return middleware_map( validation_middleware,router );
}

module.exports = mount_middleware;