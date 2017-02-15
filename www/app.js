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
          controller: 'DashboardCtrl'
        }
      }
    })
    .state('app.login', {
      cache: false,
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "login.html",
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.enroll_doctor', {
      url: "/enroll_doctor",
      views: {
        'menuContent' :{
          templateUrl: "enroll_doctor.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.doctors_list', {
      url: "/doctors_list",
      views: {
        'menuContent' :{
          templateUrl: "doctors_list.html",
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
    })
    .state('app.sales_details', {
      cache: false,
      url: "/sales_details",
      views: {
        'menuContent' :{
          templateUrl: "sales_details.html",
          controller: 'DoctorsCtrl'
        }
      }
    })

    .state('app.appointment_details', {
      cache: false,
      url: "/appointment_details",
      views: {
        'menuContent' :{
          templateUrl: "appointment_details.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.schedule_appointement', {
      cache: false,
      url: "/schedule_appointement",
      views: {
        'menuContent' :{
          templateUrl: "schedule_appointement.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.add_new_sales', {
      cache: false,
      url: "/add_new_sales",
      views: {
        'menuContent' :{
          templateUrl: "add_new_sales.html",
          controller: 'DoctorsCtrl'
        }
      }
    })

    .state('app.add_new_prescription', {
      cache: false,
      url: "/add_new_prescription",
      views: {
        'menuContent' :{
          templateUrl: "add_new_prescription.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.add_drugs', {
      cache: false,
      url: "/add_drug",
      views: {
        'menuContent' :{
          templateUrl: "add_drugs.html",
          controller: 'DoctorsCtrl'
        }
      }
    })
    .state('app.add_notes', {
      cache: false,
      url: "/add_notes",
      views: {
        'menuContent' :{
          templateUrl: "add_notes.html",
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
