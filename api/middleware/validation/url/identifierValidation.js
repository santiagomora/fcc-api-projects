const {Url} = require( config( 'path.models' ) );

function append_url( request,found_url ){
    request.params.found_url = found_url;
    return false;
}

module.exports = {
    url_id:{
        required:true,
        positive_integer:true,
        exists:{
            model:Url.model,
            field:'url_id',
            on_success: ({
                res,
                request
            }) => { // append found record on request
                return res
                    ? append_url( request,res )
                    : true
            }
        }
    }
}
