const configTypes = {
    path:require('./path'),
    app:require('./app'),
    api:require('./api'),
    mongo:require('./mongo'),
    cors:require('./cors')
};

//expects a string: "ConfigName.Property"
const config = ( type ) => type.split('.').reduce(
  (t,e) => t[e],configTypes
)

module.exports = config;
