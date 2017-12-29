app.controller("doctorsController", function ($scope, $state, $stateParams, $http, $compile, doctorService) {
  // doctor search function
  var map = null;
  $scope.mapShow = true;
  $scope.mapBackground = true;
  $scope.locationRequired = true;
  $scope.getDoctors = function () {
    $scope.mapShow = false;
    $scope.mapBackground = false;
    if ($scope.searchedLocation == undefined) {
      console.log("Empty");
      $scope.locationRequired = false;
    } else {
      console.log("initMap end");
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
            console.log(response);
            lat = response.data.results[0].geometry.location.lat;
            lng = response.data.results[0].geometry.location.lng;
            console.log(lat, lng)
          })
          .catch(function (error) {
            console.log(error);
          })
      };
      var coords = "";
      $scope.doctorTest = function (x) {
        console.log($scope.docs[x]);
        doctorService.setDoctor($scope.docs[x]);
        $state.go("doctor");
      }
      $scope.docs = [];
      setTimeout(function () { coords = lat + "%2C" + lng; }, 500);
      setTimeout(function () {
        doctorService.getDoctorsApi(name, specialty, coords)
          .then(function (response) {
            console.log("Doctors Response: ", response);
            console.log("Doctors Data:", response.data.data);
            $scope.doctors = response.data.data;
            // Changing values from "male" to "Male", "female" to "Female", true to "Yes", false to "No"
            var femaleVal = "Female";
            var maleVal = "Male";
            var yes = "Yes";
            var no = "No";
            for (var i = 0; i < response.data.data.length; i++) {
              if (response.data.data[i].profile.gender === "female") {
                response.data.data[i].profile.gender = femaleVal;
              };
              if (response.data.data[i].profile.gender === "male") {
                response.data.data[i].profile.gender = maleVal;
              };
              if (response.data.data[i].practices[0].accepts_new_patients === true) {
                response.data.data[i].practices[0].accepts_new_patients = yes;
              };
              if (response.data.data[i].practices[0].accepts_new_patients === false) {
                response.data.data[i].practices[0].accepts_new_patients = no;
              };
            };
            map = new google.maps.Map(document.getElementById('mapMain'), {
              zoom: 8,
              center: new google.maps.LatLng(lat, lng)
            });

            for (var i = 0; i < response.data.data.length; i++) {
              $scope.docs.push(response.data.data[i]);
              console.log(response.data.data[i].profile.first_name)
              var contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">' + response.data.data[i].profile.first_name + ' ' +  response.data.data[i].profile.last_name + ', ' + response.data.data[i].profile.title + '</h1>' +
                '<p class="specialtyName">' + response.data.data[i].specialties[0].name + '</p>' +
                '<div id="bodyContent">' +
                '<p class="doctorDescription">' + response.data.data[i].profile.bio + '</p>' +
                '<a class="map-click" ng-click="doctorTest(' + i + ')">+ more info</a>' +
                '</div>' +
                '</div>';
              
              console.log($scope.docs);
              
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(response.data.data[i].practices[0].lat, response.data.data[i].practices[0].lon),
                map: map
              });
              var infowindow = new google.maps.InfoWindow({
                // content = content
              });
              var compiled = $compile(contentString)($scope);
              var content = compiled[0]
              google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                infowindow.close(marker);
                return function() {
                  infowindow.setContent(content);
                  infowindow.open(map,marker);
                }
              }
            )(marker,content,infowindow));
            };
            console.log("initMap end");
          }, function (error) {
            console.log(error);
          });
      }, 500);
    };
  };

  // Get one doctor by Id
  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    doctorService.getDoctorById($stateParams.id, function (doctor) {
      $scope.doctor = doctor;
    });
  }
  else {
    doctorService.getDoctorById($stateParams.id, function (doctor) {
      $scope.doctor = doctor;
    });
    $state.go("doctor");
  };

});