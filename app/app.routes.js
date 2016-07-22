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