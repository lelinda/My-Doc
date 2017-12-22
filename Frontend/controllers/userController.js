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

  // required are hidden on initial load
  $scope.firstNameRequired = true;
  $scope.lastNameRequired = true;
  $scope.emailRequired = true;
  $scope.passwordRequired = true;
  $scope.confirmPasswordRequired = true;

  $scope.addUser = function () {
    // if any form input is empty then run next if else
    if (($scope.user.firstName == "" || $scope.user.firstName == null)
    || ($scope.user.lastName == "" || $scope.user.lastName == null)
    || ($scope.user.email == "" || $scope.user.email == null)
    || ($scope.user.password == "" || $scope.user.password == null)
    || ($scope.user.confirmPassword == "" || $scope.user.confirmPassword == null)) {

    if ($scope.user.firstName == "" || $scope.user.firstName == null) {
      $scope.firstNameRequired = false;
    } else { $scope.firstNameRequired = true; }
    if ($scope.user.lastName == "" || $scope.user.lastName == null) {
      $scope.lastNameRequired = false;
    } else { $scope.lastNameRequired = true; }
    if ($scope.user.email == "" || $scope.user.email == null) {
      $scope.emailRequired = false;
    } else { $scope.emailRequired = true; }
    if ($scope.user.password == "" || $scope.user.password == null) {
      $scope.passwordRequired = false;
    } else { $scope.passwordRequired = true; }
    if ($scope.user.confirmPassword == "" || $scope.user.confirmPassword == null) {
      $scope.confirmPasswordRequired = false;
    } else { $scope.confirmPasswordRequired = true; }
  }
  //if everything is filled out in signup form this function is run and inputs passed in
  else {
    userService.addUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.password, $scope.user.confirmPassword)
  }
    // userService.post($stateParams.id, function (user) {
    //   $scope.user = user;
    //   $state.go("login");
    // })
  }



  // Update
  $scope.updateUser = function (user) {
    userService.put($stateParams.id, function (user) {
      $scope.user = user;
      $state.go("users");
    })
  }

  // Delete
  $scope.deleteUser = function (user) {
    userService.delete($stateParams.id, function (user) {
      $scope.user = user;
      $state.go("users");
    })
  }

  $scope.errorMessage = false;

  $scope.login = function (user){
    userService.getUser()
    .then(function (response){
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        if(response.data[i].email == user.email && response.data[i].password == user.password){
          $state.go("users");
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