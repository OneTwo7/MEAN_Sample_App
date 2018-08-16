var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      title: 'Sample App',
      templateUrl: '/partials/home',
      controller: 'homeController'
    })
    .when('/help', {
      title: 'Sample App | Help',
      templateUrl: '/partials/help'
    })
    .when('/about', {
      title: 'Sample App | About',
      templateUrl: '/partials/about'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);

app.controller('homeController', ['$scope',
  function ($scope) {
    $scope.welcome = 'Welcome to Sample App';
  }
]);

app.run(['$location', '$rootScope', function ($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
