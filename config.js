module.exports = {
    session_key : 'its my plesure',
    server_port : 80,
    manager_id: 'webgot.js@gmail.com',
    manager_pw : 'tjdfkrdnjs~1',
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
