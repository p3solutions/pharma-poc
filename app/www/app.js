// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', "ion-datetime-picker"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })
    .state('app.dashboard', {
      cache: false,
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "dashboard.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.add_doctor', {
      url: "/add_doctor",
      views: {
        'menuContent' :{
          templateUrl: "add_doctor.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.doctors', {
      cache: false,
      url: "/doctors",
      views: {
        'menuContent' :{
          templateUrl: "doctors.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.login', {
      cache: false,
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "login.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.notes', {
      cache: false,
      url: "/notes",
      views: {
        'menuContent' :{
          templateUrl: "notes.html",
          controller: 'DoctorsCtrl'
        }
      }
    })    .state('app.drugs', {
      cache: false,
      url: "/drugs",
      views: {
        'menuContent' :{
          templateUrl: "drugs.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.single', {
      url: "/doctors/:doctorId",
      views: {
        'menuContent' :{
          templateUrl: "doctor.html",
          controller: 'DoctorCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
