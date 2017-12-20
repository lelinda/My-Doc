app.controller("doctorController", function($scope, $state, $stateParams, $http, doctorService) {

  $scope.getDoctor = function() {
    console.log("getting doctor");

    $http.get("http://localhost:5000/api/doctor/")
    .then(function(response) {
      console.log(response);
      console.log(response.data.data);
      $scope.doctors = response.data.data;
    })
  }

  $scope.getDoctor();
})
