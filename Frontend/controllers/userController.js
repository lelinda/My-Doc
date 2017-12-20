app.controller("userController", function($scope, $state, $stateParams, $http, userService) {

  $scope.getUser = function() {
    console.log("getting users");

    $http.get("http://localhost:5000/api/users")
    .then(function(response) {
      console.log(response);
      $scope.users = response.data
    })
  }

  $scope.getUser();
})