myApp.controller('HomeCtrl', ['$scope', function($scope){
	$scope.name = 'Login please';  

	$scope.FBLogin = function(){
		FB.login(function(response) {
		    if (response.authResponse) {
		    	console.log('Welcome!  Fetching your information.... ');
		     	FB.api('/me', function(response) {
		       	console.log(response);

		       	// var accessToken = FB.getAuthResponse()
		       	// console.log(accessToken);

			       	FB.api(
				    "/{1279354068753797}",
				    function (response) {
				      if (response && !response.error) {
				      	console.log(response);
				      }
				    }
				);

		     });

		    FB.api('/113124472034820', function(response) {
  				console.log(response);
			});

		    FB.api('/me', {fields: 'last_name', fields: 'gender'}, function(response) {
  				console.log(response);
			});



			// var body = 'Reading JS SDK documentation';
			// FB.api('/me/feed', 'post', { message: body }, function(response) {
			//   	if (!response || response.error) {
			//     	alert('Error occured');
			//     	console.log(response.error);
			//   	} else {
			//     	alert('Post ID: ' + response.id);
			//   	}
			// });

			// var pageAccessToken = '1234567890|faketoken';
			// FB.api('/me/conversations', {
  	// 			access_token : pageAccessToken
			// });


		    } else {
		     console.log('User cancelled login or did not fully authorize.');
		    }
		});

		
	}
}])