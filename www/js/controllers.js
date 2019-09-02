angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('browseCtrl', function($scope, $stateParams, $state) {
 

if (window.AdMob) {
  var admob = window.AdMob;
  admob.createBanner({
      adId: "ca-app-pub-2457999726327943/7689766106",
      adSize: admob.AD_SIZE.SMART_BANNER,
      position: admob.AD_POSITION.BOTTOM_CENTER,
      isTesting: false, //Live
      //isTesting: true, //Test
      autoShow: true
  }, function (data) {
      console.log('Banner created... ' + angular.toJson(data));
  }, function (err) {
      console.log('Failed to create banner view... ' + angular.toJson(err));
  });
} else {
  alert("plugin not found")
}
  var jobRef = firebase.database().ref("jobs");
  $scope.credentials = {};
  $scope.credentials.shift = "Day";
  $scope.credentials.salary = "5000-10000";

$scope.submit = function () {
  jobRef.push ({
    profile: $scope.credentials.profile,
    location: $scope.credentials.location,
    shift: $scope.credentials.shift,
   vacancies : $scope.credentials.vacancies,
    salary: $scope.credentials.salary
 });
 alert("job created successfully")
 $state.go('app.search');
}


})
.controller('searchCtrl', function($scope, $stateParams, $state) {
  var jobRef = firebase.database().ref("jobs");
 // var ref = firebase.database().ref();
  jobRef.on("value", function(snapshot) {
   console.log(snapshot.val(), 'snapshot');
   $scope.jobs = snapshot.val();
}, function (error) {
   console.log("Error: " + error.code);
});

$scope.createjob = function() {
  $state.go('app.browse');
}
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});



