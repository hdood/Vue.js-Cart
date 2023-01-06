export default {
    state(){
        return {
            products : {}, 
        }
    }, 
    mutations : {
        UPDATE_QUANTITY(state, payload){
            state.products[payload.id].quantity = payload.quantity;
        }, 
        UPDATE_CART(state, payload){
            state.products  = payload.cart; 
        }, 
        CLEAR_CART(state, payload){
            state.products = {}; 
        }
    }, 
    actions : {
        /**
         * Initialises the cart key in the session if it not already initialised.
         */
        initCart(context, payload){
            if(sessionStorage.getItem("cart") == null){
                sessionStorage.setItem("cart", JSON.stringify({}));
            }
            context.dispatch("getCartItems"); 
        }, 

        /**
         * Updates the cart stored in the sessionStorage.
         */
        updateSessionCart(context, payload){
            sessionStorage.setItem("cart", JSON.stringify(context.state.products)); 
        }, 



        /**
         * Increments product quantity.
         * @param {Object} payload contains the params passed to the action.
         * @param {number} payload.id product id.
         * @param {number} payload.quantity product quantity.
         */
        incrementQuantity(context, payload){
            let quantity = context.state.products[payload.id].quantity;
            quantity++; 
            context.commit("UPDATE_QUANTITY", { id : payload.id, quantity}); 
            context.dispatch("updateSessionCart"); 
        },

        /**
         * Decremetns product quantity.
         * @param {Object} payload contains the params passed to the action.
         * @param {number} payload.id product id.
         * @param {number} payload.quantity product quantity.
         */
        decrementQuantity(context, payload){
            let quantity = context.state.products[payload.id].quantity;
            if(quantity <= 1) return;
            quantity--; 
            context.commit("UPDATE_QUANTITY", { id : payload.id, quantity}); 
            context.dispatch("updateSessionCart"); 
        },


        /**
         * Get the cart items from the sessionStorage into the state variable.
         */
        getCartItems(context, payload){
            let cart = JSON.parse(sessionStorage.getItem("cart")); 
            context.commit("UPDATE_CART", { cart }); 
        }, 


        /**
         * 
         * @param {Object} payload.product contains all the product informations (id, price, image, quantity)
         */
        addToCart(context, payload){
            payload.product.quantity = 1; 
            let cart = JSON.parse(sessionStorage.getItem("cart")); 
            cart[payload.id] = payload.product;
            context.commit("UPDATE_CART", { cart }); 
            context.dispatch("updateSessionCart"); 
        }, 

        deleteItem(context, payload){
            let cart = JSON.parse(sessionStorage.getItem("cart"))
            for(let id in cart){
                if( id == payload.id){
                    delete cart[id]
                }
            }
            context.commit("UPDATE_CART", { cart }); 
            context.dispatch("updateSessionCart");
        }, 

        /**
         * Reset cart dev only
         */
        resetCart(context, payload){
            context.commit("CLEAR_CART");
            context.dispatch("updateSessionCart");
        }
    }, 
    getters : {
        cartTotal(state){
            let total = 0; 
            let cart = state.products
            for(let product in cart){
                total = total + ( cart[product].price * cart[product].quantity); 
            }
            return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(total)
        }

    }
}