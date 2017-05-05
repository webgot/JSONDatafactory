let Schema = {};

Schema.createSchema = function(mongoose){

    var UserSchema = mongoose.Schema({
        id : {type : String, required : true, unique : true},
        passwd : {type : String, required : true},
        name : {type : String, required : true},
        age : {type : Number, required : true},
        gender : {type : Boolean, required : true},
        introduction : {type : String, required : true}

    });

    console.log('UserSchema 정의함');

    return UserSchema;
}

module.exports = Schema;
