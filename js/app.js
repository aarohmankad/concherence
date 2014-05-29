
var app = angular.module("concherence", ["firebase"]);
var room;
function roomCreator ($scope, $firebase) {
	
	$scope.createRoom = function (e) {
		if(e.keyCode != 13)
			return;

		room = $scope.roomname;

		$(".roomMaker").addClass("hidden");
		$(".conch").removeClass("hidden");
		$(".messages").removeClass("hidden");
	}

}

function conchRequester ($scope, $firebase) {
	var ref = new Firebase("https://concherence.firebaseio.com/");
	$scope.access = $firebase(ref);

	$scope.requestAccess = function (e) {
		$scope.access = $firebase(ref.child(room));
		$scope.access.$add({requestAccess: true});
	}
}
function loungeController($scope, $firebase) 
{	
	var ref = new Firebase("https://concherence.firebaseio.com/");
	$scope.messages = $firebase(ref);

	$scope.addMessage = function (e) {
		if(e.keyCode != 13)
			return;
		
		$scope.messages = $firebase(ref.child(room));
		if ($scope.access) {	
			alert("access was granted");
			$scope.messages.$add({from: $scope.name, body: $scope.msg});
		}

		
		$scope.msg = "";
		
		$('#nameField').addClass("hidden");
	};

}
