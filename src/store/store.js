import { createStore } from "vuex";
import cartModule from "./modules/cartModule.js";
import productsModule from "./modules/productsModule.js";



export default createStore({
    modules : {
        cart : cartModule, 
        products : productsModule
    }
})
