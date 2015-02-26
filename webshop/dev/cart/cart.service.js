(function() {
    "use strict";

    var cartService = function ($http, $rootScope) {
        var addProductToCart = function (product, quantity, price) {
            $rootScope.cartProducts[product.name] = {
                product: product,
                quantity: quantity,
                price: price
            }
        }

    var removeItem = function (cartProduct){
        delete $rootScope.cartProducts[cartProduct.product.name];
    }

        return {
            addProductToCart: addProductToCart,
            removeItem: removeItem
        }
    }

    angular
    .module("Main")
    .factory("cartService", cartService)

}());