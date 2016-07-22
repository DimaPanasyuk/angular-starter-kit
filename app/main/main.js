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