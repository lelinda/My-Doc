var app = angular.module("myApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // Home view -> login
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "userController"
        })

        // Create new user
        .state("userCreate", {
            url: "/user/new",
            templateUrl: "./views/login-form.html",
            controller: "userController"
        })

        // Logged in users view
        .state("account", {
            url: "/account",
            templateUrl: "./views/account.html",
            controller: "accountController"
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
            controller: "doctorsController"
        })

        // Show doctor by ID
        .state("doctor", {
            url: "/doctor",
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