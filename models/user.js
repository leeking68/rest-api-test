var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var UserSchema = new Schema({
      userId:{type: String},
      info: {
            name: String,
            password: String
      }
});
 
module.exports = mongoose.model('User', UserSchema);