console.log('routes.js connected');

var users = require('../controllers/users.js');

module.exports = function(app){
  app.post('/', users.create);
  app.post('/newMessage', users.newMessage);
  app.get('/getMessages', users.getMessages);
  app.post('/newComment', users.newComment);
};
