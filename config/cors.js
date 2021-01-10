const whitelist = [
    'http://127.0.0.1:3001',
    'http://localhost:3001'
];

function allowed_origin( origin,callback ){
    const args = ( whitelist.indexOf( origin ) !== -1 )
        ? [null,true]
        : [ new Error('Not allowed by CORS') ];
    callback( ...args );
}

module.exports = {
    options: process.env.NODE_ENV==='development'
        ? {
            optionsSuccessStatus: 200,
            // credentials:true,
            // origin:allowed_origin
        } : {
            optionsSuccessStatus: 200,
            origin: '*'
        }
}
