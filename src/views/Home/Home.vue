<template lang="pug">
.row
	.col-md-12
		.row
			.col-md-6(v-for="prod in productsList" :key="prod.id")
				Product(:product="prod" :addCarProduct="addCarProduct")
</template>
<script>
import productsList from '@/productsList.json'
import Product from '@/components/Product.vue'


export default {
	name: 'Home',
	components: {
		Product
	},
	data(){
		return {
			productsList,
		}
	},
	methods:{
		addCarProduct(product){
			this.shopCar.push(product);
		},
		added(product){
			const item = this.shopCar.find(item => item.id === product.id);
			if(item){
				return true;
			}
			return false;
		},
	}
}
</script>
