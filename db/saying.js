var Schema = {};

Schema.createSchema = function(mongoose){

    SayingSchema = mongoose.Schema({
        userId : { type : String, required : true, 'default' : 'test' },
        id : {type : Number, required : true, 'default' : 999},
        content :{type : String, required : true, 'default' : 'no blank'} 
    });

    console.log('SayingSchema 정의함.');
    
    return SayingSchema;
}

module.exports = Schema;