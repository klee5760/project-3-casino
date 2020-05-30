var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: {type:String, required: true, unique: true},
    userID:{type: String, required: true},
    password1:{type: String, required: true},
    password2:{type: String, required: true},

});
module.exports = mongoose.model('User',UserSchema);

module.exports = User;