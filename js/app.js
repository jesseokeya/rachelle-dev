var app = angular.module('rachelleApp',
['ngMaterial', 'ngRoute', 'ui.bootstrap']);

app.config(function($mdThemingProvider, $mdAriaProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');
    $mdAriaProvider.disableWarnings();
});
