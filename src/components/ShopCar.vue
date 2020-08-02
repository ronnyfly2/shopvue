<template lang="pug">
div
	ul.list-group
		li.list-group-item(v-for="item in items" :key="item.id") {{ item.title }} - ${{ item.price }}
			button.btn.badge.badge-danger.float-right(@click="removerItem(item)") Eliminar
	.card.p-3.my-5
		h4.text-center Total: ${{ total }}
	button.btn.btn-info.form-control(:disabled="items.length === 0" @click="$emit('payOrder')") Pagar ahora
</template>

<script>
export default {
	name:'ShopCar',
	props: ['items'],
	computed:{
		total() {
			return this.items.reduce((collector, item) => collector + Number(item.price),0);
		}
	},
	methods:{
		removerItem(item){
			this.$emit('removeItem', item);
		}
	}
}
</script>
