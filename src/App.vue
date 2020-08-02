<template lang="pug">
#wrapper.container
	router-view
	router-view(name="containerBlock")
	router-view(name="footer")
</template>
<style lang="stylus">
.container
	position relative
	padding-top 120px
</style>
