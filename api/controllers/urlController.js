const {Increments,Url} = require( config( 'path.models' ) );

function handle_create_url( req,res ){
    console.log(req.body);
    return res.status(422).json({msg:"Unprocessable entity"});
}

function handle_redirect_url( req,res ){
    Increments.find({}).exec(
        function( err,res ){
            console.log(err,res)
        }
    );
    return res.status(200).json({hello:"hola"});
}

module.exports = {
    handle_create_url,
    handle_redirect_url
};
