var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/loginPartial.html',
    controller: 'loginController'
  })
  .when('/messages',{
    templateUrl: 'partials/messagePartial.html',
    controller: 'messageController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
