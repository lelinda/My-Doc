app.service("doctorService", function ($http) {
  //  doctor search
  this.getDoctorsApi = function (name, specialty) {
    console.log(name + " and " + specialty)
    return $http.get("http://localhost:5000/api/doctor?name=" + name + "&specialty_uid=" + specialty + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=efe95df06a0afcd63f78c2b81c58fb4c")
  }

  // Get one by Id
  this.getDoctorById = function (id, cb) {
    if (id == "" || id == undefined || id == null) {
      var doctor = {}
      cb(doctor)
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
  }
})
