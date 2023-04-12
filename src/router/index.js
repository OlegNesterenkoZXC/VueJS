import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import MyArticle from '../components/MyArticle.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'articles',
		component: ArticleList
	},
	{
		path: '/article/:id',
		name: 'Article',
		component: MyArticle,
		props: (route) => store.state.moduleArticles.articles.find((x) => x.id == route.params.id)
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
