const urlValidation = require('./urlValidation');

const identifierValidation = require('./identifierValidation');

const validate = require( config('path.validation') );

const base_uri = config('api.base_uri');

module.exports = {
    uri: `${base_uri}/shorturl`,
    handlers:[],
    children:[
        {
            uri:`${base_uri}/shorturl/:url_id$`,
            method:'get',
            handlers:[
                validate({
                    validation:identifierValidation,
                    method:'get',
                    excluded:[
                        /new$/gi
                    ]
                })
            ],
            children:[]
        },{
            uri:`${base_uri}/shorturl/new$`,
            method:'post',
            handlers:[
                validate({
                    validation:urlValidation,
                    method:'post',
                    excluded:[
                        /\d+$/gi
                    ]
                })
            ],
            children:[]
        }
    ]
};
