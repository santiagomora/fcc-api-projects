
var whitelist = [
    'http://127.0.0.1:3001'
];

function allowed_origin( origin,callback ){
    if( whitelist.indexOf( origin ) !== -1 )
        callback( null,true );
    else
        callback( new Error('Not allowed by CORS') );
}

module.exports = {
    options:{
        optionsSuccessStatus: 200,
        //credentials: true,
        origin: '*' //allowed_origin
    }
}
