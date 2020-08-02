import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

Vue.use(VueRouter)
let loadView=(path, view)=>{
	return () => import(`@/views/${path}/${view}.vue`);
}

const routes = [
	{
		path: '/',
		name: 'Home',
		components: {
			default: Header,
			containerBlock: loadView('Home','Home'),
			footer: Footer
		}
	},
	{
		path: '/carrito',
		name: 'Shop',
		components: {
			default: Header,
			containerBlock: loadView('ShopCar','ShopCar'),
			footer: Footer
		}
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
