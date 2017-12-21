app.service("userService", function($http) {

  // Get all
  this.getUser = function() {
    return $http.get("http://localhost:5000/api/users")
  }

  // Get one by Id
  this.getUserById = function(id, cb) {
    if (id == "" || id == undefined || id == null) {
      var user = {}
      cb(user)
    }
    else {
      $http.get("http://localhost:5000/api/users/" + id + "/")
        .then(function (response) {
          cb(response.data)
        }, function (error) {
          console.log(error);
        })
    }
  }

   // Create
   this.post = function(id, cb) {
    if (id == "" || id == undefined || id == null) {
      var user = {}
      cb(user)
    }
    else {
      $http.post("http://localhost:5000/api/users/" + id + "/")
        .then(function (response) {
          cb(response.data)
        }, function (error) {
          console.log(error);
        })
    }
  }

  // Update
  this.put = function(id, cb) {
    if (id == "" || id == undefined || id == null) {
      var user = {}
      cb(user)
    }
    else {
      $http.put("http://localhost:5000/users/" + id + "/")
        .then(function (response) {
          cb(response.data)
        }, function (error) {
          console.log(error);
        })
    }
  }

  // Delete
  this.delete = function(id, cb) {
    if (id == "" || id == undefined || id == null) {
      var user = {}
      cb(user)
    }
    else {
      $http.delete("http://localhost:5000/users/" + id + "/")
        .then(function (response) {
          cb(response.data)
        }, function (error) {
          console.log(error);
        })
    }
  }

})