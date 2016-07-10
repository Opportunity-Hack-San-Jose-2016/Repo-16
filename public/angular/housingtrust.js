var housingtrustApp = angular.module('housingtrustApp', ['ngRoute']);

housingtrustApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider, $routeParams) {
        $routeProvider
            .when('/', {
                templateUrl: 'landingpage.html',
                controller: 'default_controller'
            }).when('/register', {
                templateUrl: 'register-types.html',
                controller: 'registerController'
            }).when('/eligibility', {
                templateUrl: 'eligibility.html',
                controller: 'eligibility_Controller'
            }).when('/thankyou', {
                templateUrl: 'thankyou.html',
                controller: 'thankyou_Controller'
            }).when('/admin', {
                templateUrl: 'admin-login.html',
                controller: 'admin_controller'
            }).when('/admin/tracking', {
                templateUrl: 'admin-tracking.html',
                controller: 'admin_tracking_Controller'
            });
        $locationProvider.html5Mode(true);
    }
]);

housingtrustApp.controller('default_controller', function($scope, $http, $routeParams) {
	$('.modal-trigger').leanModal({
	    ready: function() {
	        
	    }
	});
});

housingtrustApp.controller('admin_controller', function($scope, $http, $routeParams) {
	
});

housingtrustApp.controller('registerController', function($scope, $http, $routeParams) {
	
});

housingtrustApp.controller('eligibility_Controller', function($scope, $http, $routeParams) {
	$scope.submitdata = function(data) {
		console.log("in angular submit")
		$http({
			method : "POST",
			url : '/api/savedata',
			data : {
				"fname" : $scope.fname,
				"lname" : $scope.lname,
				"address" : $scope.address,
				"phone" : $scope.phone,
				"mail" : $scope.mail,
				"citylive" : $scope.citylive,
				"citywork" : $scope.citywork,
				"citywork_other" : $scope.citywork_other,
				"citylive_other" : $scope.citylive_other,
				"adultmember" : $scope.adultmember,
				"childrenmember" : $scope.childrenmember,
				"own_home": $scope.own_home,
				"pre_home": $scope.pre_home,
				"income_monthly": $scope.income_monthly,
				"income_yearly": $scope.income_yearly,
				"downpayment": $scope.downpayment,
				"payment_src": $scope.payment_src,
				"asset": $scope.asset,
				"HUD_class": $scope.HUD_class
				
			},
			headers: {
	            "content-type": "application/json",
	        }
		}).success(function(data) {
			if (data.statusCode == 200) {
				$scope.results = '<b class="green">Congratulations!</b><br>You are eligible!!<br>We will contact you soon';
			} else {
				$scope.results = '<b class="orange">We are sorry!</b><br>You are not eligible!!';
			}
		}).error(function(error) {
		});
	};
	
	$scope.closeMyModal = function() {
		window.location = "/eligibility";
	};
});

housingtrustApp.controller('admin_tracking_Controller', function($scope, $http, $routeParams) {
	
});

housingtrustApp.controller('thankyou_Controller', function($scope, $http, $routeParams) {
	
});