angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('DashboardCtrl', function($scope) {
  var trace1 = {
    x: ['Metacin', 'Dolo 650', 'Paracetamol', 'ABC'],
    y: [20, 14, 23, 35],
    name: 'Achieved',
    type: 'bar'
  };

  var trace2 = {
    x: ['Metacin', 'Dolo 650', 'Paracetamol', 'ABC'],
    y: [20, 26, 17, 5],
    name: 'Pending',
    type: 'bar'
  };

  var data = [trace1, trace2];

  var layout = {barmode: 'stack'};

  Plotly.newPlot('quarterly_sales', data, layout);
})

.controller('LoginCtrl', function($scope, $state) {
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
  $scope.items = [];
  $scope.available_drugs = ["metacin", "dolo650", "cherricof"]

  $scope.addDrug = function()
  {
    is_available = this.available_drugs.indexOf(this.drug_name) > -1;
    this.items.unshift({"name": this.drug_name, "available": is_available});
  }
})
