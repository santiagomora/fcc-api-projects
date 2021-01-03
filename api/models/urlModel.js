const mongoose = require('mongoose');

const {pre_increment} = require( config( 'path.model_middleware' ) ).save;

const {Increments} = require( config( 'path.models' ) );

const inc_doc = config( 'mongo.mongoose.inc_doc.url_inc_doc' );

const collection_name = 'short_urls';

const {Schema} = mongoose;

const url_schema = new Schema({
        name:{
            type:String,
            required:true,
            lowercase:true,
            index:{
                unique:true
            }
        },
        id:{
            type:Number,
            required:true,
            index:{
                unique:true
            },
            min:0
        },
        inc_doc:{
            type:String,
            default: inc_doc
        }
    },{
        timestamps:{
            createdAt:'created_at',
            updatedAt:'updated_at'
        }
    });

//custom auto_increment implementation
url_schema.pre( 'save', pre_increment( inc_doc ) )

module.exports = mongoose.model( 'Url',url_schema,'short_urls' );
