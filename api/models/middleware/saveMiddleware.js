//holds middleware before save event
function initialize_increment_doc( db ){
    const cols = db.getCollectionNames();
}

function pre_increment( inc_doc ){
    return function( doc,next ){

        next();
    };
}

module.exports = {
    pre_increment
};
