(function() {
  angular
  .module('app.constants', []);
})();
(function() {
  angular
  .module('app.main', ['app.constants']);
})();
(function() {
  angular
  .module('app', [
    'ngRoute', 
    'ngResource',
    'app.constants',
    'app.main'
  ]);
})();
(function() {
  angular
  .module('app')
  .config(appConfig);

  appConfig.$inject = ['$routeProvider'];
  function appConfig($routeProvider) {
    $routeProvider
    .otherwise({
      redirectTo: '/'
    });
  }
})();
(function() {
  angular
  .module('app.constants')
  .constant('partials', 'dist/partials/');
})();
(function() {
  angular
  .module('app.main', [])
  .controller('Main', Main);

  Main.$inject = [
    '$scope',
    '$rootScope'
  ];
  function Main($scope, $rootScope) {
    $scope.greeting = 'Hi, this is simple starter on angular 1.x';
    $scope.technologies = [
      'angular 1.x',
      'angular-route',
      'angular-resource',
      'lodash',
      'bootstrap 3 (css - cdn)',
      'jquery (cdn)'
    ];
    $scope.devTools = [
      'gulp',
      'less',
      'browserSync'
    ];
  }
})();
(function() {
  angular
  .module('app.main')
  .config(mainConfig);

  mainConfig.$inject = [
    'partials',
    '$routeProvider'
  ];
  function mainConfig(partials, $routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: partials + 'main/main.html',
      controller: 'Main'
    });
  }
})();