import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import products from "./modules/products";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    num: 100
  },
  modules: {
    cart,
    products
  }
});
