var Schema = {};

Schema.createSchema = function(mongoose){

    FaqSchma = mongoose.Schema({
        id:{type : String, required : true, 'default' : 'testFaq'},
        question : {type : String, required : true, 'default' : 'what your name?'},
        context : {type : String, required : true, 'default': 'my name is SEONG'}
    });

    console.log('FaqSchema 정의함');
    
    return FaqSchma;
}

module.exports = Schema;