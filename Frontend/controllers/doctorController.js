app.controller("doctorController", function($scope, $state, $stateParams, $http, doctorService) {

  $scope.getDoctor = function() {
    console.log("getting doctor");
    doctorService.getDoctors()
    .then(function(response) {
      console.log(response);
      console.log(response.data.data);
    })
  }
  // $scope.getDoctor();
  $scope.doctorSearch = function(){
    console.log($scope.doctorName);
    var x = $scope.doctorName.split(" ").join(" ");
    
    var y = "";
    if ($scope.doctorSpeciality > 0){
    y = $scope.doctorSpecialty.split(" ").join("-");
  }
    
    console.log(x + y);
    doctorService.doctorSearch($scope.doctorName, y)
    .then(function(response){
      $scope.doctors = response.data.data
      console.log(response)
      console.log($scope.doctors);
    })
  }


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
