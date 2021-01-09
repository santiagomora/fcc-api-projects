const {Url} = require( config( 'path.models' ) );

function append_url( {request,found} ){
    request.params.found_url = found;
    return false;
}

module.exports = {
    url_id:{
        exists:{
            model:Url.model,
            field:'url_id',
            on_success: append_url
        }
    }
}
