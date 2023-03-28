import Vue from 'vue'
import App from './App.vue';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import axios from 'axios';
import { Types } from './store/types';

Vue.config.productionTip = false;

store.dispatch(Types.actions.ARTICLES_LOAD, {
	path: 'http://localhost:10000/articles.json',
});

Vue.use(VueAxios, axios);

new Vue({
	router,
	//data: store.state,
	store,
	render: h => h(App)
}).$mount('#app')
