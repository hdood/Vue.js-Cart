import axios from 'axios';

export default {
    state(){
        return {
            all : {}, 
            searchedProducts: [],
        }
    }, 
    mutations : {
        UPDATE_PRODUCTS(state, payload){
            state.all = payload.products; 
        }, 
        GET_SEARCH_RESULTS(state, payload){
            state.searchedProducts = payload.products; 
        }
    }, 
    actions : {
        fetchProducts(context, payload){
            axios.get("/../../api/api.json")
                .then(response => {
                    context.commit("UPDATE_PRODUCTS", {products : response.data});
            })
        }, 
        search(context, payload){
            context.commit("GET_SEARCH_RESULTS", { products : [] })
            const reg = new RegExp(`^${payload.query}([a-zA-Z 0-9]*)`, "i");
            const products = context.state.all; 
                for(let id in products){
                    if(products[id].name.match(reg)){

                        context.state.searchedProducts.push({
                            bold : payload.query, 
                            thin : products[id].name.match(reg)[1].toLowerCase()
                        });
                        
                    }
                    if(products[id].brand.match(reg)){
                        context.state.searchedProducts.push({
                            bold : products[id].name.toLowerCase(), 
                            thin : ""
                        });                            
                    }
                }
                console.log(context.state.searchedProducts)
        }, 
        clearSearch(context, payload){
            let products = {}; 
            context.commit("GET_SEARCH_RESULTS", { products }); 
        }
    }


}