const validate_form = require('./form');

const values = ( data_obj ) => Object.values( data_obj );

function has_errors( validation ){
    return validation.reduce(
        ( is_valid,messages ) => (
            messages.length>0
                ? true
                : is_valid
        ),
        false
    )
}

function validation_middleware( validation ){
    return function( req,res,next ){
        const param_validation = validate_form( req.params,validation );
        return has_errors( values( param_validation ) )
            ? res.status(422).json( param_validation )
            : next();
    }
}

module.exports = validation_middleware;
