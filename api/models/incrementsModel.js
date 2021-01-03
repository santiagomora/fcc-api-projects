const mongoose = require('mongoose');

const {Schema} = mongoose;

const collection_name = 'increments';

const increments_schema = new Schema({
    quantity:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
        dropUps:true,
        index:{
            unique:true
        }
    }
});

module.exports = mongoose.model( 'Increments',increments_schema,collection_name );
