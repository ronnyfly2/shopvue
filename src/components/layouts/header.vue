<template lang="pug">
header
	.row.box_center
		.col-sm-6.text-left
			router-link(to="/")
				h1 Shop
		.col-sm-6.text-right
			ul
				li
					router-link.btn(to="/carrito") Ir a carrito ({{$store.state.shopCar.length==1?`${$store.state.shopCar.length} producto`:`${$store.state.shopCar.length} productos`}})
</template>
<style lang="stylus">
header
	margin 0 auto
	text-align center
	background-color #FFFFFF
	height auto !important
	box-shadow 1px 4px 4px #409eff2b
	position fixed
	top 0
	left 0
	width 100%
	z-index 1
	.col-sm-6
		vertical-align middle
		display inline-block
		padding-top 25px
		padding-bottom 25px
	.text
		&-right
			text-align right
		&-left
			text-align left
	h1
		max-width 170px
		color #007bff
		font-size 20px
		font-weight 800
		padding-top 10px
		display block
	a
		display block
		&:hover
			text-decoration none
	ul
		font-size 0
		margin 0
		li
			margin 0 16px
			font-size 16px
			display inline-block
			vertical-align middle
			a
				color #007bff
			.btn
				background #ffffff
				border-radius 4px
				height 48px
				color #007bff
				border 2px solid #007bff
				font-weight 800
				line-height 1
				padding 14px 23px
				&:focus
					box-shadow 0 0 1px 2px rgba(64, 58, 141, .4)
				&:hover
					color #007bff
			&:last-child
				margin-right 0
</style>
