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

  $http.get("http://localhost:3000/doctors.json")
            .success(function(data) {
                $scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
                console.log(data);
            })
            .error(function(data) {
                alert("ERROR");
            });

  console.log("calling this function")
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})