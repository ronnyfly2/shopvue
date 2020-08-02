<template lang="pug">
.row
	.col-md5.my-12
		ShopCar(:items="shopCar" v-on:payOrder="payOrder" v-on:removeItem="removeProduct")
</template>
<script>
import ShopCar from '@/components/ShopCar.vue'
export default {
	name: 'Shop',
	components: {
		ShopCar
	},
	data(){
		return {
			shopCar:[]
		}
	},
	methods:{
		addCarProduct(product){
			this.shopCar.push(product);
		},
		removeProduct(product){
			this.shopCar = this.shopCar.filter(item => item.id != product.id);
		},
		payOrder(){
			this.shopCar = [];
			alert('Venta completada !!!');
		}
	}
}
</script>
