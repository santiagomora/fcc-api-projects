const urlValidation = require('./dateValidation');

const identifierValidation = require('./identifierValidation');

const validate = require( config('path.validation') );

const base_uri = config('api.base_uri');

module.exports = {
    uri: `${base_uri}/shorturl`,
    handlers:[],
    children:[
        {
            uri:`${base_uri}/shorturl/:short_url$`,
            handlers:[
                validate( identifierValidation )
            ],
            children:[]
        },{
            uri:`${base_uri}/shorturl/new$`,
            handlers:[
                validate( urlValidation )
            ],
            children:[]
        }
    ]
};
