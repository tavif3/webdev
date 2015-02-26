(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($scope, cartService) {

    $scope.removeItem = function(cartProduct){
    	cartService.removeItem(cartProduct);
    }

    $scope.editItem = function(cartProduct){
    	cartService.editItem(cartProduct);
    }

}



}());