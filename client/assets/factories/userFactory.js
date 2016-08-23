app.factory('userFactory', ['$http', function($http){
  console.log('hit the userFactory');
  var users = [];
  var user = [];

  function UserFactory(){
    var _this = this;
    this.create = function(newUser, callback){
      console.log('newUser from factory= ', newUser);
      $http.post('/', newUser).then(function(rtnData){
        console.log('rtnData from factory = ', rtnData.data);
        callback(rtnData.data);
      });
    };

//---------new message------------------------------------
    this.createMessage = function(newMessage, callback){
      console.log('newMessage from factory = ', newMessage);
      $http.post('/newMessage', newMessage).then(function(rtnData){
        console.log('rtnData from factory = ', rtnData.data);
        callback(rtnData.data);
      });
    };

// ----triggered when logging in and/or submitting a new message----
    this.getMessages = function(callback){
      $http.get('/getMessages').then(function(retData){
        callback(retData.data);
      });
    };

//------new comment------------------------------------------
    this.createComment = function(newComment, callback){
      console.log('newCOmment from factory = ', newComment);
      $http.post('/newComment', newComment).then(function(rtnData){
        console.log('rtnData from factory = ', rtnData.data);
        callback(rtnData.data);
      });
    };
  }
  return new UserFactory();
}]);
