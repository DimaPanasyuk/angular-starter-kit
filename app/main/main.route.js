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