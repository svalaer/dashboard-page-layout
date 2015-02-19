$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

blocjams.controller("dashboard.controller", ["$scope","Metrics","$rootScope",function($scope,Metrics,$rootScope){
    $scope.songPlays = $rootScope.songPlays;
    $scope.albumClicks = $rootScope.albumClicks;
    $scope.artistClicks = $rootScope.artistClicks;

    $scope.state = "song";
    $scope.buttonClick = function(button) {
        $scope.state = button

    };
    $scope.state = "album";
    $scope.buttonClick = function(button) {
        $scope.state = button

    };
    $scope.state = "artist";
    $scope.buttonClick = function(button) {
        $scope.state = button

    }

}]);