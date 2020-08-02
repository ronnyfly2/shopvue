import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import productsList from '@/productsList.json'
export default new Vuex.Store({
  state: {
		shopCar:[],
		productsList,
		product: null
  },
	mutations: {
		addProduct(state){
			state.shopCar = [state.product];
		}
	},
	actions: {
		addCarProductAction( context ){
			context.commit('addProduct');
		}
	},
	modules: {
	},
	getters:{
	}
})
