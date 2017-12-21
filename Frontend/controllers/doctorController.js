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

  // Get one doctor by Id
  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    doctorService.getDoctorById($stateParams.id, function (doctor) {
      $scope.doctor = doctor;
    })
  }
  else {
    doctorService.getDoctorById($stateParams.id, function (doctor) {
      $scope.doctor = doctor;
    })
  }
})
