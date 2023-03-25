import Vue from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

store.dispatch('fetchArticles', {
	path: '/articless.json',
});

new Vue({
	router,
	data: store.state,
	store,
	render: h => h(App)
}).$mount('#app')
