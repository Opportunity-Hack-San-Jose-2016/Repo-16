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
            }).when('/admin', {
                templateUrl: 'admin-login.html',
                controller: 'admin_controller'
            }).when('/customer/:product_name', {
                templateUrl: 'amazon_customer_search.html',
                controller: 'amazon_customer_searchController'
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

housingtrustApp.controller('registerController2', function($scope, $http, $routeParams) {
	
});