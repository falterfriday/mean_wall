console.log('server-side controller connected');

var mongoose = require('mongoose');

var User = mongoose.model('User');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

function UserController(){
  this.create = function(req, res){
    var user = User({name:req.body.name});
    user.save(function(err){
      if(err){
        console.log('new user could not be added');
        res.json(err);
      }
      else {
        console.log('new user added');
        res.json(user);
      }
    });
  };
  this.newMessage = function(req,res){
    var message = Message({message:req.body.message, name:req.body.name});
    message.save(function(err){
      if(err){
        console.log('new message not saved');
      }
      else {
        console.log('new message added');
        res.json(message);
      }
    });
  };
  this.getMessages = function(req, res){
    Message.find({}).populate('_comments').exec(function(err, messages){
      if(err){
        console.log('error getting messages');
        res.json(err);
      }
      else {
        console.log('messages retrieved');
        res.json(messages);
      }
    });
  };
  this.newComment = function(req,res){
    Message.findOne({_id: req.body.messageId}, function(err,message){
      var comment = Comment({name: req.body.name, comment: req.body.comment});
      comment._message = req.body.messageId;
      message._comments.push(comment);
      comment.save(function(err){
        if(err){
          console.log('new comment not saved');
          res.json(err);
        }
        else {
          message.save(function(err){
            if(err){
              re.json(err);
            }
            else {
              console.log('comment successfully added to message');
              res.json(comment);
            }
          });
        }
      });
    });
  };
}

module.exports = new UserController();
