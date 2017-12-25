app.controller("doctorController", function ($scope, $state, $stateParams, $http, doctorService) {

  $scope.getDoctors = function () {
    var name = "";
    var specialty = "";
    if ($scope.searchedName != undefined){
      var name = $scope.searchedName.split(" ").join("%20")
    };
    if ($scope.searchedSpecialty != undefined){
    var specialty = $scope.searchedSpecialty.split(" ").join("-")
    };
    console.log(name + " " + specialty)
    doctorService.getDoctorsApi(name, specialty)
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
      }, function (error) {
        console.log(error);
      })
  }

  // $scope.getDoctors();

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
