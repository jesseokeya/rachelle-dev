var app = angular.module('rachelleApp',
['ngMaterial', 'ngRoute', 'ui.bootstrap']);

app.config(function($mdThemingProvider, $mdAriaProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('cyan');
    $mdAriaProvider.disableWarnings();
});
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'mainController',
    templateUrl: 'templates/index.tpl.html'
  })
  .otherwise({
    redirectTo: '/'
  })
});
