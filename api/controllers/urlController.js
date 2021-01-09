const {Increments,Url} = require( config( 'path.models' ) );

const {format_response_url} = Url.format;

const {find_one_url,create_url} = Url.methods;

function build_response({res,response}){
    return res.status( response.status ).json( response.data );
}

async function create_valid_url({req}){
    const {found_url,valid_url} = req.body;
    const new_url = found_url
        ? found_url
        : await create_url({url_name:valid_url});
    return format_response_url( new_url );
}

async function handle_create_url( req,res ){
    const {valid_url} = req.body;
    const response = valid_url
        ? {
            data:await create_valid_url( {req} ),
            status:200
        } : {
            data:{
                error:"Invalid URL"
            },
            status:422
        }
    return build_response({res,response});
}

async function handle_find_url( req,res ){
    const {found_url,url_id} = req.params;
    const ret_url = found_url
        ? found_url
        : await find_one_url({url_id});
    const response = ret_url
        ? {
            data: format_response_url( ret_url ),
            status: 200
        } : {
            data: {
                error:'No short URL found for the given input'
            },
            status: 400
        };
    return build_response({res,response});
}

module.exports = {
    handle_create_url,
    handle_find_url
};
