'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
      // redirect to the home index
      redirectTo: '/home'
    })

  .when('/home', {
      templateUrl: 'templates/pages/home/index.html',
      controller: 'HomeController'
    })

  .when('/wod/:id', {
      templateUrl: 'templates/pages/wod/index.html',
      controller: 'WodController'
    })

  .otherwise({redirectTo: '/'});
}]);
