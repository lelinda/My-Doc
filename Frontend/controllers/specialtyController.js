app.controller("specialtyController", function ($scope, $state, $stateParams, $http, specialtyService) {

  $scope.getSpecialty = function () {
    specialtyService.getSpecialty()
      .then(function (response) {
        console.log("Specialties Response:", response)
      }, function (error) {
        console.log(error);
      })
  }
  
  $scope.getSpecialty();
})
