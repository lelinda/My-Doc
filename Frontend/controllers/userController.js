app.controller("userController", function($scope, $state, $stateParams, $http, userService) {

  // Get all user
  $scope.getUser = function() {
    console.log("getting users");

    $http.get("http://localhost:5000/api/users")
    .then(function(response) {
      console.log(response);
      $scope.users = response.data
    })
  }

  $scope.getUser();

  // Get one user by Id
  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user;
      $scope.submitButton = true;
      $scope.heading = "Add New User"
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
  $scope.addUser = function() {
    userService.post($stateParams.id, function(user) {
      $scope.user = user;
      $state.go("users");
    })
  }

  // Update
  $scope.updateUser = function(user) {
    userService.put($stateParams.id, function(user) {
      $scope.user = user;
      $state.go("users");
    })
  }

  // Delete
  $scope.deleteUser = function(user) {
    userService.delete($stateParams.id, function(user) {
      $scope.user = user;
      $state.go("users");
    })
  }
})