app.controller("specialtyController", function($scope, $state, $stateParams, $http, specialtyService) {

  $scope.getSpecialty = function() {
    console.log("getting specialties");
    $http.get("http://localhost:5000/api/specialties")
    .then(function(response) {
      console.log(response);
      // console.log(response.data.data);
      // $scope.specialties = response.data.data;
    })
  }
  $scope.getSpecialty();

  // // Get one doctor by Id
  // if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
  //   specialtyService.getSpecialtyById($stateParams.id, function (specialty) {
  //     $scope.specialty = specialty;
  //   })
  // }
  // else {
  //   specialtyService.getSpecialtyById($stateParams.id, function (specialty) {
  //     $scope.specialty = specialty;
  //   })
  // }
})
