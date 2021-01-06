const {Url} = require( config( 'path.models' ) );

module.exports = {
    url:{
        required:true,
        valid_url:true,
        unique:{
            model:Url.model,
            field:'url_name',
            on_success: ({
                res,
                request
            }) => { // append found record on request
                request.body.found_url = res;
                return false;
            }
        }
    }
}
