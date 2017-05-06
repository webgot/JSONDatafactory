module.exports = {
    db_url : 'mongodb://localhost:27017/test',
    db_schemas :[
        {
            file:'./saying', 
            collection : 'Saying', 
            schemaName : 'SayingSchema', 
            modelName : 'SayingModel' 
        },
        {
            file:'./faq', 
            collection : 'Faq', 
            schemaName : 'FaqSchema', 
            modelName : 'FaqModel' 
        },
        {
            file:'./users', 
            collection : 'Users', 
            schemaName : 'UserSchema', 
            modelName : 'UserModel' 
        }
    ]
}