app.service("doctorService", function ($http) {
  //  doctor search
  this.getDoctorsApi = function (name, specialty, coords) {
    console.log(name + " and " + specialty + " " + coords);
    return $http.get("http://localhost:5000/api/doctor?name=" + name + "&specialty_uid=" + specialty + "&location=" + coords)
  }

  var _location = ""; //address for geocode
  // google maps geocode call
  this.geoMap = function (searchedLocation) {
    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?", {
      params: {
        address: searchedLocation,
        key: 'AIzaSyABBleRUqFda2vbGC2oDLFT7z46fCnYfow'
      }
    });

  }
  // Get one by Id
  this.getDoctorById = function (id, cb) {
    if (id == "" || id == undefined || id == null) {
      var doctor = {}
      cb(doctor)
    }
    else {
      $http.get("http://localhost:5000/api/doctor/" + id + "/")
        .then(function (response) {
          cb(response.data)
        }, function (error) {
          console.log(error);
        })
    }
  }
})
