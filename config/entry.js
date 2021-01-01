const configTypes = {
    path:require('./path'),
    app:require('./app'),
    api:require('./api')
}

//expects a string: "ConfigName.Property"
const config = ( type ) => type.split('.').reduce(
  (t,e) => t[e],configTypes
)

module.exports = config;
