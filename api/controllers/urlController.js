const {Increments,Url} = require( config( 'path.models' ) );

const {format_response_url} = Url.format;

const {find_one_url,create_url} = Url.methods;

async function handle_create_url( req,res ){
    const {found_url,url} = req.body;
    const new_url = found_url
        ? found_url
        : await create_url({url_name:url});
    return res.status(200).json( format_response_url( new_url ) );
}

async function handle_find_url( req,res ){
    const {found_url,url_id} = req.params;
    const ret_url = found_url
        ? found_url
        : await find_one_url({url_id});
    return res.status(200).json( format_response_url( ret_url ) );
}

module.exports = {
    handle_create_url,
    handle_find_url
};
