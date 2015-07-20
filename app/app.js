'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
      // redirect to the notes index
      redirectTo: '/home'
    })

  .when('/home', {
      templateUrl: 'templates/pages/home/index.html',
      controller: 'HomeController'
    })

  .when('/focus', {
      templateUrl: 'templates/pages/home/focus.html',
      controller: 'FocusController'
    })

  .when('/style', {
      templateUrl: 'templates/pages/home/style.html',
      controller: 'StyleController'
    })

  .otherwise({redirectTo: '/'});
}]);
