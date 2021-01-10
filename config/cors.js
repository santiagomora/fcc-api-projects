const whitelist = [
    'http://127.0.0.1:3001',
    'http://localhost:3001',
    'https://www.freecodecamp.org'
];

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
        origin:allowed_origin
    }
}
