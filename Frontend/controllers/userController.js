app.controller("userController", function ($scope, $state, $stateParams, $http, userService) {

  // Get all user
  $scope.getUser = function () {
    console.log("getting users");

    $http.get("http://localhost:5000/api/users")
      .then(function (response) {
        console.log(response);
        $scope.users = response.data;
      })
  }

  $scope.getUser();

  // Get one user by Id
  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user;
      $scope.submitButton = true;
      $scope.heading = "Create New User"
    })
  }
  else {
    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user;
      $scope.submitButton = false;
      $scope.heading = "Update User"
    })
  }

  // Create

  // if fields are empty error message in the user form validation (hidden as default)
  $scope.firstNameReq = false;
  $scope.lastNameReq = false;
  $scope.emailReq = false;
  $scope.passwordReq = false;

  // if passwords do not match error message in the new user form (hidden as default)
  $scope.passwordError = false;

  $scope.addUser = function () {
    // checks if fields are empty, form validation error message will show, otherwise, it will stay hidden
    if ($scope.user.firstName == "" || $scope.user.firstName == null) {
      $scope.firstNameReq = true;
    } else {
      $scope.firstNameReq = false;
    }
    if ($scope.user.lastName == "" || $scope.user.lastName == null) {
      $scope.lastNameReq = true; 
    }  else {
      $scope.lastNameReq = false;
    }
    if ($scope.user.email == "" || $scope.user.email == null) {
      $scope.emailReq = true;
    } else {
      $scope.emailReq = false;
    }
    if ($scope.user.password == "" || $scope.user.password == null) {
      $scope.passwordReq = true;
    } else {
      $scope.passwordReq = false;
    }

    // checks if password field matches confirm password field, if it does not match, error message will show, otherwise, it will stay hidden
    if ($scope.user.password != $scope.user.confirmPassword) {
      $scope.passwordError = true;
    } else {
      $scope.passwordError = false;
    }

    // if forms are not empty & passwords do match, register button will proceed to home-login view
    if ($scope.user.firstName != "" && $scope.user.firstName != null && $scope.user.lastName != "" && $scope.user.lastName != null && $scope.user.email != "" && $scope.user.email != null && $scope.user.password != "" && $scope.user.password != null && $scope.user.confirmPassword != "" && $scope.user.confirmPassword != null && $scope.user.password == $scope.user.confirmPassword) {
      $state.go("home");
    }

    // userService.post($stateParams.id, function (user) {
    //   $scope.user = user;
    // })
  }



  // Update
  $scope.updateUser = function (user) {
    userService.put($stateParams.id, function (user) {
      $scope.user = user;
      $state.go("user");
    })
  }

  // Delete
  $scope.deleteUser = function (user) {
    userService.delete($stateParams.id, function (user) {
      $scope.user = user;
      $state.go("home");
    })
  }

  // login form validation error message hidden on initial load
  $scope.errorMessage = false;

  $scope.login = function (user){
    userService.getUser()
    .then(function (response){
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        if(response.data[i].email == user.email && response.data[i].password == user.password){
          $state.go("doctors");
        }
        else {
          $scope.errorMessage = true;
        }
      }
    })
    .catch(function (error){
      console.log(error)
    })
  }  

})