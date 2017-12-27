app.controller("doctorController", function ($scope, $state, $stateParams, $http, doctorService) {
  // doctor search function
  var map = null;
  $scope.locationRequired = true;
  $scope.getDoctors = function () {
    if ($scope.searchedLocation == undefined) {
      console.log("Empty")
      $scope.locationRequired = false;
    } else {
      
      console.log("initMap end")
      $scope.locationRequired = true;
      var lat = "";
      var lng = "";
      var name = "";
      var specialty = "";
      if ($scope.searchedName != undefined) {
        var name = $scope.searchedName.split(" ").join("%20")
      };
      if ($scope.searchedSpecialty != undefined) {
        specialty = $scope.searchedSpecialty.split(" ").join("-")
      };
      if ($scope.searchedLocation !== undefined) {
        doctorService.geoMap($scope.searchedLocation)
          .then(function (response) {
            console.log(response)
            lat = response.data.results[0].geometry.location.lat;
            lng = response.data.results[0].geometry.location.lng;
            console.log(lat, lng)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      var coords = "";
      setTimeout(function () { coords = lat + "%2C" + lng; }, 500);
      setTimeout(function () {
        doctorService.getDoctorsApi(name, specialty, coords)
          .then(function (response) {
            console.log("Doctors Response: ", response);
            console.log("Doctors Data:", response.data.data);
            $scope.doctors = response.data.data;
            // Changing values from "male" to "Male", "female" to "Female", true to "Yes", false to "No"
            var femaleVal = "Female"
            var maleVal = "Male"
            var yes = "Yes"
            var no = "No"
            for (var i = 0; i < response.data.data.length; i++) {
              if (response.data.data[i].profile.gender === "female") {
                response.data.data[i].profile.gender = femaleVal;
              }
              if (response.data.data[i].profile.gender === "male") {
                response.data.data[i].profile.gender = maleVal;
              }
              if (response.data.data[i].practices[0].accepts_new_patients === true) {
                response.data.data[i].practices[0].accepts_new_patients = yes;
              }
              if (response.data.data[i].practices[0].accepts_new_patients === false) {
                response.data.data[i].practices[0].accepts_new_patients = no;
              }
            }
              map = new google.maps.Map(document.getElementById('mapMain'), {
                zoom: 8,
                center: new google.maps.LatLng(lat, lng)
          
                
              });
              for (var i = 0; i < response.data.data.length; i++){
                console.log(response.data.data[i].practices[0].lat + " " + response.data.data[i].practices[0].lng)
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(response.data.data[i].practices[0].lat, response.data.data[i].practices[0].lon),
                map: map
                })
              }
              console.log("initMap end")
          }, function (error) {
            console.log(error);
          })
          
      }, 500);
    }
    
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
    $state.go("doctor");
  }

})
