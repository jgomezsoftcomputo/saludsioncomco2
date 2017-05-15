var app = angular.module('appSion', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/nosotros", {
        templateUrl : "partials/nosotros.htm"
    })
    .when("/nuestros_servicios", {
        templateUrl : "partials/nuestros_servicios.htm"
    })
    .when("/pqrsf", {
        templateUrl : "partials/pqrsf.htm"
    })
    .when("/escribenos", {
        templateUrl : "partials/escribenos.htm"
    })
    .when("/citas", {
        templateUrl: "partials/citas.htm"
    })
    .when("/horario", {
        templateUrl: "partials/horario.htm"
    })
    .when("/cuota", {
        templateUrl: "partials/cuota.htm"
    })
    .otherwise({
        templateUrl : "partials/main.htm"
    });;
});