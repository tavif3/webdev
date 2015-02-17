(function() {
    'use strict';

    angular
        .module('Main', [
        	'ngRoute',
            'Main.products',
            'Main.product'
            ]
        )
        .config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
        		.when("/", {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })
}());
