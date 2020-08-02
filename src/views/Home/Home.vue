<template lang="pug">
.row
	.col-md-12
		.row
			.col-md-6(v-for="(prod, key) in productsList" :key="prod.id")
				Product(:product="prod" :index="key" v-on:addCarProduct="addProduct(key)")
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
	}
}
</script>
