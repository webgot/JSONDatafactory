const mongodb = require('mongodb');
const mongoose = require('mongoose');
const users = require('./users');
const saying = require('./saying');
const faq = require('./faq');
let database = {};

database.init = function(app, config){
    console.log('init() 호출됨');
    connect(app, config);
}

function connect(app, config){

    console.log('connection() 호출됨');
    

    let mongoUrl = config.db_url;
    /*
    let mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL;

    if(mongoURL == null && process.env.DATABASE_SERVICE_NAME){
      var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
          mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
          mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
          mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
          mongoPassword = process.env[mongoServiceName + '_PASSWORD'],
          mongoUser = process.env[mongoServiceName + '_USER'];

          if(mongoHost && mongoPort && mongoDatabase){
            mongoURL = 'mongodb://';
            if(mongoUser && mongoPassword){
              mongoURL += mongoUser +':'+mongoPassword +'@';
            }
            mongoURL += mongoHost+':'+mongoPort +'/'+mongoDatabase;
          }
    }
    */
     // mongodb connection
     /*

     */

  mongoose.connect(mongoUrl);
  database.db = mongoose.connection;

  database.db.on('error', (err)=>{
    if(err)
      throw err;

    console.log('connection error');
  });
  database.db.on('open', ()=>{
    console.log('connection OK!!\n' + config.db_url);
    createSchema(app, config);
  });
  
  database.db.on('disconnected', connect);

}

function createSchema(app, config){
    let SchemaLen = config.db_schemas.length;
    console.log('설정에 정의된 스키마 수 %d', SchemaLen);

    for(let i = 0; i<SchemaLen; ++i){
        let curItem = config.db_schemas[i];

        let curSchema = require(curItem.file).createSchema(mongoose);
        console.log('%s 모듈을 불러들은 후 스키마 정의함', curItem.file);

        let curModel = mongoose.model(curItem.collection, curSchema);
        console.log('%s 컬랙션을 위해 모델 정의함', curItem.collection);

        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
        console.log('스키마 이름 [%s], 모델 이름 [%s]이 database 객체의 속성으로 추가됨', curItem.schemaName, curItem.modelName);
 
  }
    app.set('database', database);
    console.log('database 객체가 app 객체의 속성으로 추가됨');

}

module.exports = database;