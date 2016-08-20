var mongoose = require('mongoose');
// is Schema needed?
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  comment: {
    type: String
  },
  _message: [{
    type: Schema.Types.ObjectId, ref: 'Message'
  }]
}, {timestamps: true});


var Comment = mongoose.model('Comment', CommentSchema);
