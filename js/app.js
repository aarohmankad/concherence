
// mod_name should be changed to the same name you have
// in the lounge.html file in the ng-app attribute for 
// the html element
var app = angular.module("concherence", ["firebase"]);

function loungeController($scope, $firebase) 
{
	// 1. Sign up for Firebase at firebase.com
	// 2. Create a Development Firebase
	// 3. Insert your url into the field
	var ref = new Firebase("https://concherence.firebaseio.com/");
	$scope.messages = $firebase(ref);

	$scope.addMessage = function (e) {

		// Only executes the following code if the user
		// is pressed the Enter key.
		if(e.keyCode != 13)
			return;
		
		// Add a message using the user's name and their message
		$scope.messages.$add({from: $scope.name, body: $scope.msg});

		// Clear the message input to improve user experience
		$scope.msg = "";

		// This code allows the user to only enter their name once.
		// Users can re-enter/change their names by refreshing the page.
		document.getElementById('msgContainer').removeChild(document.getElementById('nameField'));
	};

}