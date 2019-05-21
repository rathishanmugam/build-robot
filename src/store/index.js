import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    cart:[],
      parts:null,
  },
  mutations: {
    addRobotToCart(state,robot){
state.cart.push(robot);
    },
    updateParts(state,parts){
      state.parts=parts;
    }
  },
  actions: {
    getParts({commit}) {
        Vue.axios.get('/api/parts')
       // Vue.axios.get('http://localhost:8081/api/parts')
      .then(result => commit('updateParts',result.data))
      .catch(console.error);
    },
      addRobotToCart({commit,state},robot){
        const cart = [...state.cart,robot];
        return axios.post('/api/cart',cart)
        .then( () => commit('addRobotToCart',robot));
      },
  },
getters: {
    cartSaleItems(state){
      return state.cart.filter(item => item.head.onSale);
    },
},
});

