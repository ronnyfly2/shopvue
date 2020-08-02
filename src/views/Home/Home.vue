<template lang="pug">
.row
	.col-md-12
		.row
			.col-md-6(v-for="(prod, key) in productsList" :key="prod.id")
				Product(:product="prod" :index="key" v-on:addCarProduct="addCarProduct")
</template>
<script>

import { mapState } from 'vuex';
import Product from '@/components/Product.vue';

export default {
	name: 'Home',
	components: {
		Product
	},
	computed:{
		...mapState(['productsList'])
	},
	data(){
		return {
		}
	},
	methods:{
		addCarProduct(product, idx){
			console.log('instance', product, idx)
			this.$store.state.shopCar = product;
			this.$store.state.productsList[idx].added = true;
			console.log('ddd', this.$store.state.shopCar)
			this.$store.dispatch('addCarProductAction');
		},
		added(product){
			const item = this.$store.state.shopCar.find(item => item.id === product.id);
			console.log('aa', item)
			if(item){
				return true;
			}
			return false;
		},
	}
}
</script>
