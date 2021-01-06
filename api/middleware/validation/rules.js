const {isNaN,isInteger} = Number;

const dns = require( 'dns' );

function check_formats( valid_formats,data ){
    return valid_formats.reduce(
        ( is_valid,current_format ) => (
            ( ( data.match( new RegExp( current_format,'gi' ) )||[] ).length>0 )
                ? false
                : is_valid
        ),
        true
    )
}

module.exports = {
    required:({
        data,
        rule_value
    }) => {
        return new Promise(
            ( resolve,reject ) => {
                resolve(
                    rule_value
                        ? (data===null && typeof data === undefined) || (data||'').length<=0
                        : false
                );
            }
        ).catch(e => console.error(e));
    },
    date:({
        data,
        rule_value
    }) => {
        return new Promise(
            ( resolve,reject ) => {
                const valid_formats = [
                    '\\d{1,2}-\\d{1,2}-\\d{1,4}',
                    '\\d{1,4}-\\d{1,2}-\\d{1,2}'
                ];
                resolve(
                    (rule_value.length>0)
                        ? check_formats( rule_value,data )
                        : false
                );
            }
        ).catch(e => console.error(e));

    },
    valid_formats:({
        data,
        rule_value
    }) =>{
        return new Promise(
            ( resolve,reject ) => {
                resolve(
                    (rule_value.length>0)
                        ? check_formats( rule_value,data )
                        : false
                );
            }
        ).catch(e => console.error(e));
    },
    numeric:({
        data,
        rule_value
    }) => {
        return new Promise(
            ( resolve,reject ) => {
                const data_val = Number( data ),
                    eval = isNaN( data_val )
                        ? 1.1
                        : data_val;
                resolve(
                    rule_value
                        ? isNaN( Number( data ) )
                        : false
                );
            }
        ).catch(e => console.error(e));
    },
    integer:({
        data,
        rule_value
    }) => {
        return new Promise(
            ( resolve,reject ) => {
                const data_val = Number( data ),
                    eval = isNaN( data_val )
                        ? 1.1
                        : data_val;
                resolve(
                    rule_value
                        ? !isInteger( eval )
                        : false
                );
            }
        ).catch(e => console.error(e));
    },
    positive_integer:(data,rule_value) => {
        return new Promise(
            ( resolve,reject ) => {
                const data_val = Number( data ),
                    eval = isNaN( data_val )
                    ? -1
                    : data_val;
                resolve(
                    rule_value
                        ? eval<0
                        : false
                );
            }
        ).catch(e => console.error(e));
    },
    valid_url: ({
        data,
        rule_value
    }) => {
        return new Promise(
            (resolve,reject) => {
                dns.lookup(
                    data,
                    function( err,addr,fam ){
                        resolve(
                            rule_value
                                ? !addr
                                : false
                        );
                    }
                );
            }
        ).catch( e => console.error(e) );
    },
    unique: ({
        data,
        rule_value:{
            model,
            field,
            on_success
        },
        request
    }) => {
        return new Promise(
            (resolve,reject) => {
                const find = {};
                find[ field ] = data;
                model.findOne( find ).exec(
                    function( err,res ){
                        if( err )
                            throw err;
                        resolve( on_success( {res,request} ) ); //it is expected to continue and redirect from controller
                    }
                )
            }
        ).catch( e => console.error(e) );
    },
    exists: ({
        data,
        rule_value:{
            model,
            field,
            on_success
        },
        request
    }) => {
        return new Promise(
            (resolve,reject) => {
                const find = {};
                find[ field ] = data;
                model.findOne( find ).exec(
                    function( err,res ){
                        if( err )
                            throw err;
                        resolve( on_success( {res,request} ) ); //it is expected to continue and redirect from controller
                    }
                )
            }
        ).catch( e => console.error(e) );
    }
};
