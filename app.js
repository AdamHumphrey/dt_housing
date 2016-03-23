var app = angular.module('HousingApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngResource', 'ngTouch']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: 'main.html',controller: 'MainController as main',title: 'Home'})
});
app.run(['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
        $rootScope.pageTitle = current.$$route.title;
        $('FIXME').text(current.$$route.title);
    });
}]);