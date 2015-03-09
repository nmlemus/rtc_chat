'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Home',
	function($scope, $http, Home) {
		// This provides Authentication context.
		$scope.authentication = Home;


	}
]);
