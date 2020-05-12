import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./module_frontend/home/Home";
//import BlockCartCity from "./module_frontend/home/BlockCartCity";
//import BlockChooseCity from "./module_frontend/home/BlockChooseCity";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Home

  }
})
