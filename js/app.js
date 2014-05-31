
var app = angular.module("concherence", ["firebase"]);
var room;

app.directive("roomCreate", function () {
	return{
		restrict: 'E',
		templateUrl: 'views/room-create.html',
		controller: function  ($scope) {
			$scope.createRoom = function (e) {
				if(e.keyCode != 13)
					return;

				room = $scope.roomname;
			};
		},
		controllerAs: 'room'
	};
});

app.directive("lounge", function () {
	return{
		restrict: 'E',
		templateUrl: 'views/lounge.html',
		controller: function ($scope, $firebase) {
			var ref = new Firebase("https://concherence.firebaseio.com/");
			$scope.messages = $firebase(ref);

			$scope.addMessage = function (e) {
				if(e.keyCode != 13)
					return;
				
				$scope.messages = $firebase(ref.child(room));
				$scope.messages.$add({from: $scope.name, body: $scope.msg});

				
				$scope.msg = "";
				
				$('#nameField').addClass("hidden");
			};
		},
		controllerAs: 'lounge'
	};
});

app.directive("navigation", function () {
	return{
		restrict: 'E',
		templateUrl: 'views/navigation.html',
		controller: function () {},
		controllerAs: 'navigation'
	};
});