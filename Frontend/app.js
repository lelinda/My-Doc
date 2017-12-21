var app = angular.module("myApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", { // home view
      url: "/",
      templateUrl: "./views/home.html"
    })

    .state("userCreate", { // create user
      url: "/loginform",
      templateUrl: "./views/login-form.html",
      controller: "userController"
    })

    .state("users", { // show users
      url: "/users",
      templateUrl: "./views/users.html",
      controller: "userController"
    })

    .state("user", { // show 1 user
      url: "/users/:id",
      templateUrl: "./views/user.html",
      controller: "userController"
    })

    .state("userUpdate", { // update user
      url: "/user",
      templateUrl: "./views/login-form.html",
      controller: "userController"
    })

    .state("userDrList", { // user doctors list
      url: "/userdoctorlist",
      templateUrl: "./views/userDrList.html",
      controller: "userController"
    })

    .state("login", { // login
      url: "/login",
      templateUrl: "./views/login.html",
      controller: "userController"
    })

    .state("doctorCreate", { // create new doctor
      url: "/doctorform",
      templateUrl: "./views/doctor-form.html",
      controller: "doctorController"
    })

    .state("doctor", { // show new doctor (1)
      url: "/doctor",
      templateUrl: "./views/doctor.html",
      controller: "doctorController"
    })

})
