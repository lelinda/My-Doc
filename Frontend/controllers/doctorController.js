app.controller("doctorController", function ($scope, $state, $stateParams, $http, doctorService) {
  $scope.doctor = doctorService.returnDoctor();
  $scope.mapInit = function () {
    console.log($scope.doctor.practices[0].lat)
    var uluru = { lat: $scope.doctor.practices[0].lat, lng: $scope.doctor.practices[0].lon };
    var map = new google.maps.Map(document.getElementById('doctor-map'), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  $scope.mapInit();
});