const {Url} = require( config( 'path.models' ) );

module.exports = {
    format:{
        required:true,
        valid_formats:[
            '^d-m-y$',
            '^m-d-y$',
            '^y-m-d$',
            '^y-d-m$'
        ],
        unique:{
            model:Url,
            field:'url_name',
            on_fail: ({req,url_id}) => { // ignore fail and pass to controller
                req.body.url_id = url_id;
            }
        }
    },
    date:{
        required:true,
        date:true
    }
};
