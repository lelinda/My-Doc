app.service("doctorService", function($http) {
//  doctor search
  this.getDoctors = function(){
    return $http.get("http://localhost:5000/api/doctor/")
  }
  
  // Get one by Id
  this.getDoctorById = function(id, cb) {
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
