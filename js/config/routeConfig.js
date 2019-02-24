angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../view/contatos.html",
        controller: "listaTelefonicaController"
    });
});