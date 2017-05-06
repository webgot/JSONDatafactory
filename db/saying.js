var Schema = {};

Schema.createSchema = function(mongoose){

    SayingSchema = mongoose.Schema({
        userId : { type : Number, required : true, 'default' : 0909 },
        id : {type : Number, required : true, 'default' : 999},
        name:{type : String, required : true, 'default' : 'no blank'},
        content :{type : String, required : true, 'default' : 'no blank'}
    
    });

    console.log('SayingSchema 정의함.');

    SayingSchema.static('findAll', function(callback){
        return this.find({}, callback);
    });

    return SayingSchema;
}

module.exports = Schema;