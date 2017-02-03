angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope, $http) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.doctors = []

  $http.get("http://localhost:3000/doctors.json")
    .success(function(data) {
      $scope.doctors = data;
      console.log($scope.doctors);
    })
    .error(function(data) {
        alert("ERROR");
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
