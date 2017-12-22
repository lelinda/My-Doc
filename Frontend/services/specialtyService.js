app.service("specialtyService", function($http) {

  this.getSpecialty = function() {
    return $http.get("http://localhost:5000/api/specialties")
  }
  
})
