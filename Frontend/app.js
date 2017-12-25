var app = angular.module("myApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // Home view -> login
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "userController",
        })

        // Create new user
        .state("userCreate", {
            url: "/user/new",
            templateUrl: "./views/login-form.html",
            controller: "userController"
        })

        // Show users
        .state("users", {
            url: "/users",
            templateUrl: "./views/users.html",
            controller: "userController"
        })

        // Show user by ID
        .state("user", {
            url: "/users/:id",
            templateUrl: "./views/user.html",
            controller: "userController"
        })

        // Update user by ID
        .state("userUpdate", {
            url: "/user/:id/edit",
            templateUrl: "./views/login-form.html",
            controller: "userController"
        })

        // Show search bar for doctors -> search doctors view
        .state("doctors", {
            url: "/doctors",
            templateUrl: "./views/doctors.html",
            controller: "doctorController"
        })

        // Show doctor by ID
        .state("doctor", {
            url: "/doctors/:id",
            templateUrl: "./views/doctor.html",
            controller: "doctorController"
        })

        // Logout
        .state("logout", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "userController"
        })

})