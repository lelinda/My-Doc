var app = angular.module("myApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "./views/home.html"
    })
})
