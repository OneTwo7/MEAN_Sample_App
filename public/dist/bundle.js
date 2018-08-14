angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: '/partials/home',
      controller: 'homeController'
    });
  }
]);

angular.module('app').controller('homeController', ['$scope',
  function ($scope) {
    $scope.welcome = 'Welcome to Sample App';
  }
]);
