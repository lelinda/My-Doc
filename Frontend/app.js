var app = angular.module("myApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("index", { // home view
      url: "/",
      templateUrl: "./views/home.html"
    })

    .state("userCreate", { // create user
      url: "/loginform",
      templateUrl: "./views/login-form.html",
      controller: "userController"
    })

    .state("users", {
      url: "/users",
      templateUrl: "./views/users.html",
      controller: "userController"
    })

    .state("user", { // show user
      url: "/users/:id",
      templateUrl: "./views/user.html",
      controller: "userController"
    })

    .state("userUpdate", { // update user
      url: "/user",
      templateUrl: "./views/login-form.html",
      controller: "userController"
    })

})
