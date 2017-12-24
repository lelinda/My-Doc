var app = angular.module("myApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // home view -> login
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
        })

        // create new user
        .state("userCreate", {
            url: "/user/new",
            templateUrl: "./views/login-form.html",
            controller: "userController"
        })

        // show users
        .state("users", {
            url: "/users",
            templateUrl: "./views/users.html",
            controller: "userController"
        })

        // show user by ID
        .state("user", {
            url: "/users/:id",
            templateUrl: "./views/user.html",
            controller: "userController"
        })

        // update user by ID
        .state("userUpdate", {
            url: "/user/:id/edit",
            templateUrl: "./views/login-form.html",
            controller: "userController"
        })

        // show search bar for doctors -> search doctors view
        .state("doctors", {
            url: "/doctors",
            templateUrl: "./views/doctors.html",
            controller: "doctorController"
        })

        // show doctor by ID
        .state("doctor", {
            url: "/doctors/:id",
            templateUrl: "./views/doctor.html",
            controller: "doctorController"
        })

})