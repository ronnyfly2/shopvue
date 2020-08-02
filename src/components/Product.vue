<template lang="pug">
.card.my-5
	.card-body
		h5.text-center.card-title {{ product.title }}
		img(:src="product.img" width="290" height="150" style="display:block;margin:0 auto;max-width:100%;")
		p.text-center.text-muted.card-text.display-4 $ {{ Number(product.price).toFixed() }}
		button.btn.btn-primary.form-control(@click="addCar(product)" :disabled="$store.state.added")
			| {{ $store.state.added ? 'Agregado' : 'Agregar al carrito' }}
</div>
</div>

</template>
 <script>
 export default {
	name:'Product',
	props: {
		'product':{
			default:[]
		}
	},
	methods:{
		addCar(item){
			this.$emit('addCarProduct', item);
		}
	}
 }
 </script>
