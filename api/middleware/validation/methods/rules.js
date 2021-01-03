
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
    required: async (data,rule_value) => {
        return rule_value
            ? (data===null && typeof data === undefined) || (data||'').length<=0
            : false;
    },
    date: async (data,rule_value) => {
        const valid_formats = [
            '\\d{1,2}-\\d{1,2}-\\d{1,4}',
            '\\d{1,4}-\\d{1,2}-\\d{1,2}'
        ];
        return rule_value
            ? check_formats( valid_formats,data )
            : false;
    },
    valid_formats: async (data,rule_value) => {
        return (rule_value.length>0)
            ? check_formats( rule_value,data )
            : false;
    },
    numeric: async (data,rule_value) => {
        return rule_value
            ? isNaN( Number( data ) )
            : false;
    },
    integer: async (data,rule_value) => {
        const data_val = Number( data ),
            eval = isNaN( data_val )
                ? 1.1
                : data_val;
        return rule_value
            ? !isInteger( eval )
            : false;
    },
    positive: async (data,rule_value) => {
        const data_val = Number( data ),
            eval = isNaN( data_val )
            ? -1
            : data_val;
        return rule_value
            ? eval<0
            : false;
    },
    valid_url: async (data,rule_value) => {
        const data_val = Number( data ),
            eval = isNaN( data_val )
            ? -1
            : data_val;
        return rule_value
            ? eval<0
            : false;
    },
};
