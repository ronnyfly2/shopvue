<template lang="pug">
.row
	.col-md5.my-12
		ShopCarItem(:items="shopCar" v-on:payOrder="payOrder" v-on:removeItem="removeProduct")
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import ShopCarItem from '@/components/ShopCarItem.vue'
export default {
	name: 'Shop',
	components: {
		ShopCarItem
	},
	computed:{
		...mapState(['shopCar'])
	},
	data(){
		return {
		}
	},
	methods:{
		...mapMutations(['removeProduct', 'payOrder']),
	}
}
</script>
