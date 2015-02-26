(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($scope, cartService) {

    $scope.removeItem = function(cartProduct){
    	cartService.removeItem(cartProduct);
    }

    $scope.increaseQuantity = function(product){
    cartService.increaseQuantity(product);
    }

    $scope.decreaseQuantity = function(product){
        cartService.decreaseQuantity(product);
    }
}



}());