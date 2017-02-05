angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('DoctorsCtrl', function($scope, $http, $state) {
  $scope.doctors = []
  $scope.no_of_doctors = 0;
  $scope.error_message = ""

  $http.get("http://localhost:3000/doctors.json")
    .success(function(data) {
      $scope.doctors = data;
      $scope.no_of_doctors = data.length
    })
    .error(function(data) {
        alert("ERROR");
    });

  $scope.isUserValid = function()
  {
    if(this.user_name == "admin" && this.password == "password")
    {
      this.error_message = ""
      $state.go('app.dashboard');
    }
    else
    {
      this.error_message = "Incorrect user name or password"
    }
  }

  $scope.addDoctor = function()
  {
    doctor = {
      first_name: this.first_name,
      last_name: this.last_name,
      middle_name: this.middle_name,
      speciality: this.speciality
    }

    $http.post("http://localhost:3000/doctors.json", doctor)
      .success(function(data)
      {
        $state.go('app.doctors');
      })
      .error(function() 
      {
      })
  }
})

.controller('DoctorCtrl', function($scope, $stateParams) {
  $scope.dateValue = new Date();
  $scope.items = [
    {"name":"metacin", "available": false},
    {"name":"dola 650", "available": true},
    {"name":"chericof", "available": true}
  ];
})
