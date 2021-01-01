const dateValidation = require('./dateValidation');

const epochValidation = require('./epochValidation');

const validate = require( config('path.validation') );

const base_uri = config('api.base_uri')

module.exports = {
    uri: `${base_uri}/timestamp`,
    handlers:[],
    children:[{
        uri:`${base_uri}/timestamp/:date$`,
        handlers:[
            validate(epochValidation)
        ],
        children:[{
            uri:`${base_uri}/timestamp/:date/:format$`,
            handlers:[
                validate(dateValidation)
            ],
            children:[]
        }]
    }]
};
