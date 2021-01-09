const validate_form = require('./form');

const helper = require( config('path.helper') );

const {values} = helper.objHelper;

const {promise_wrapper} = helper.asyncHelper;

const param_by_method = {
    get: ( req )  => req.params,
    post: ( req ) => req.body
};

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

async function validate({
    request,
    response,
    next,
    validation,
    method
}){
    const param_validation = await validate_form({
        form_values:param_by_method[ method ]( request ),
        form_validation:validation,
        request
    });
    return has_errors( values( param_validation ) )
        ? response.status(422).json( param_validation )
        : next();
}

function check_valid_url( {excluded,originalUrl} ){
    return excluded.reduce(
        ( invalid_match,url_reg ) => ( originalUrl.match( url_reg ) || [] ).length>0
            ? [ ...invalid_match,url_reg ]
            : invalid_match,
        []
    );
}

function validation_middleware({
    validation,
    method,
    excluded
}){
    return async function( request,response,next ){
        const {originalUrl} = request,
            invalid_url = check_valid_url({
                excluded,
                originalUrl
            });
        return ( invalid_url.length>0 )
            ? next()
            : await validate({
                request,
                response,
                next,
                validation,
                method
            });
    }
}

module.exports = validation_middleware;
