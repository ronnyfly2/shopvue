<template lang="pug">
.row.home
	.col-md-12
		.row
			.col-md-6(v-for="(prod, key) in productsList" :key="prod.id")
				Product(:product="prod" :index="key" v-on:addCarProduct="addProduct(key)")
			button.btn.btn-primary.form-control(@click="goShopCar" v-if="$store.state.shopCar.length>0") Realizar pedido
</template>
<script>

import { mapState, mapMutations } from 'vuex';
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
		...mapMutations(['addProduct']),
		goShopCar(){
			this.$router.push('/carrito');
		}
	}
}
</script>
