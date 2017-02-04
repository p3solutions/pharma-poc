angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope, $http, $location) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.doctors = []
  $scope.no_of_doctors = 0;

  $http.get("http://localhost:3000/doctors.json")
    .success(function(data) {
      $scope.doctors = data;
      $scope.no_of_doctors = data.length
      console.log($scope.doctors);
    })
    .error(function(data) {
        alert("ERROR");
    });

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
        console.log("POST success");
        $location.path('#/app/doctors');
      })
      .error(function() {
        console.log("POST error");
      })
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
