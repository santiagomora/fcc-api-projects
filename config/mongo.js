const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_URI,
    DB_PORT
} = process.env;

module.exports = {
    db_uri: DB_URI.replace( '<user>',DB_USER ) //user
        .replace( '<password>',DB_PASSWORD ) //password
        .replace( '<host>',DB_HOST ) //host
        .replace( '<port>',DB_PORT ) //host
        .replace( '<dbname>',DB_NAME ), //db name
    mongoose:{
        inc_doc:{ // auto increments
            url:'url_inc_doc'
        },
        connection:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    }
}
