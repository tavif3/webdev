(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($http, $scope, $rootScope, cartService) {

        /*$scope.removeItem = function(cartProduct){
        	cartService.removeItem(cartProduct);
        }*/

        $scope.removeItem = function(product){
        cartService.removeItem(product);
        }

        $scope.increaseQuantity = function(product){
        cartService.increaseQuantity(product);
        }

        $scope.decreaseQuantity = function(product){
            cartService.decreaseQuantity(product);
        }

        $scope.invoice = function(cartProducts){
            var userInfo = {};
            var u = $scope.user;
            var invoice = [userInfo, $rootScope.cartProducts];
            userInfo["firstname"] = u.firstname;
            userInfo["lastname"] = u.lastname;
            userInfo["email"] = u.email;
            userInfo["city"] = u.city;
            userInfo["zip"] = u.zip;
            
            console.log(invoice);
            $http.post('/checkout', invoice).success(function() {
                window.location= '#/';

            });


        }
}



}());