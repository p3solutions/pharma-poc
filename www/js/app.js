app = angular.module('starter', ['ionic'])
.run(function($ionicPlatform) 
{
  $ionicPlatform.ready(function() 
  {
    if(window.cordova && window.cordova.plugins.Keyboard) 
    {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) 
    {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'DashboardController'
    })
    .state('add_doctor', {
      url: '/doctor/add',
      templateUrl: 'templates/add_doctor.html',
      controller: 'DashboardController'
    });
  $urlRouterProvider.otherwise('/dashboard')
});

app.controller('DashboardController', function($scope)
{
  $scope.items =
  [
    { id: 1, name: "raja", speciality: "Cardio"},
    { id: 2, name: "mani", speciality: "Ortho"},
    { id: 3, name: "anand", speciality: "Optha"}
  ]

  $scope.addDoctor = function()
  {
    doctor = {
      id: 4,
      name: this.doctor_name,
      speciality: this.doctor_speciality
    }
    this.items.push(doctor);
  }
});