import { createApp } from "vue";
import store from "./store/store.js";
import  App  from "./App.vue";
import './style.css'; 


createApp(App).use(store).mount("#app"); 


