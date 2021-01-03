
var whitelist = [
    'http://127.0.0.1:3001',
    'http://127.0.0.1:3000'
];

function isAllowedOrigin( origin,callback ){
    if( whitelist.indexOf( origin ) !== -1 )
        callback( null,true );
    else
        callback( new Error('Not allowed by CORS') );
}

module.exports = {
    options:{
        optionsSuccessStatus: 200,
        credentials:true,
        origin: isAllowedOrigin
    }
}
