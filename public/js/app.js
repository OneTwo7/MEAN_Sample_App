var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      templateUrl: '/partials/home',
      controller: 'homeController'
    })
    .when('/help', {
      title: 'Help',
      templateUrl: '/partials/help'
    })
    .when('/about', {
      title: 'About',
      templateUrl: '/partials/about'
    })
    .when('/contact', {
      title: 'Contact',
      templateUrl: '/partials/contact'
    })
    .when('/signup', {
      title: 'Sign Up',
      templateUrl: '/partials/signup'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);

app.controller('homeController', ['$scope',
  function ($scope) {
    $scope.welcome = 'Welcome to the Sample App';
  }
]);

app.run(['$location', '$rootScope', function ($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    var title = current.$$route.title;
    $rootScope.title = title ? 'Sample App | ' + title : 'Sample App';
  });
}]);
