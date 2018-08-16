describe('app', function () {
  beforeEach(module('app'));

  it('should get home', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {

      expect($route.current).toBeUndefined();
      $httpBackend.expectGET('/partials/home').respond(200);
      $location.path('/');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('/partials/home');
      expect($route.current.controller).toBe('homeController');

    });
  });

  it('should get help', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {

      expect($route.current).toBeUndefined();
      $httpBackend.expectGET('/partials/help').respond(200);
      $location.path('/help');
      $rootScope.$digest();

      expect($location.path()).toBe('/help');
      expect($route.current.templateUrl).toBe('/partials/help');

    });
  });

  it('should get about', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {

      expect($route.current).toBeUndefined();
      $httpBackend.expectGET('/partials/about').respond(200);
      $location.path('/about');
      $rootScope.$digest();

      expect($location.path()).toBe('/about');
      expect($route.current.templateUrl).toBe('/partials/about');

    });
  });

});
