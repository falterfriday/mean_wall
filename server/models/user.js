var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    trim: true,
    minlength: [2, "name is too short"],
    validate: {
			validator: function(name){
				return /^[a-z]+$/i.test(name);
			},
			message: "invalid name"
		}
  }
}, {timestamps:true});

var User = mongoose.model('User', UserSchema);
