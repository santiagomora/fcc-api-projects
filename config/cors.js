const whitelist = process.env.CORS_WHITELIST.split(',');

function allowed_origin( origin,callback ){
    const args = ( whitelist.indexOf( origin ) !== -1 )
        ? [null,true]
        : [ new Error('Not allowed by CORS') ];
    callback( ...args );
}

module.exports = {
    options:{
        optionsSuccessStatus: 200,
        credentials:true,
        origin:allowed_origin,
        methods:['GET','POST']
    }
}
