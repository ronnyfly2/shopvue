import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import productsList from '@/productsList.json'
export default new Vuex.Store({
  state: {
		shopCar:[],
		productsList,
  },
	mutations: {
		addProduct(state, idx){
			state.productsList[idx].idx = idx;
			state.productsList[idx].added = true;
			state.shopCar.push(state.productsList[idx]);
		},
		removeProduct(state, product){
			state.shopCar = state.shopCar.filter(item => item.id != product.id);
			state.productsList[product.idx].added = false;
		},
		payOrder(state){
			state.shopCar = [];
			state.productsList.forEach(element => {
				element.added = false;
			});
			console.log('Venta completada !!!', this);
		}
	},
	actions: {
	},
	modules: {
	},
	getters:{
	}
})
