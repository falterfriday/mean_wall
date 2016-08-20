var mongoose = require('mongoose');
// is Schema needed?
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  name: {
    type: String
  },
  message: {
    type: String
  },
  _comments: [{
    type: Schema.Types.ObjectId, ref: 'Comment'
  }]
}, {timestamps: true});


var Message = mongoose.model('Message', MessageSchema);
