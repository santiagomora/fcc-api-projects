const dateValidation = require('./dateValidation');

const epochValidation = require('./epochValidation');

const validate = require( config('path.validation') );

const base_uri = config('api.base_uri')

module.exports = {
    uri: `${base_uri}/timestamp`,
    handlers:[],
    children:[{
        uri:`${base_uri}/timestamp/:date$`,
        method:'get',
        excluded:[],
        handlers:[
            validate({
                validation:epochValidation,
                method:'get',
                excluded:[]
            })
        ],
        children:[
            {
                uri:`${base_uri}/timestamp/:date/:format$`,
                method:'get',
                handlers:[
                    validate({
                        validation:dateValidation,
                        method:'get',
                        excluded:[]
                    })
                ],
                children:[]
            }
        ]
    }]
};
