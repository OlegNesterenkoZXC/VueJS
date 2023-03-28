<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/form">Add new article</router-link>
		</nav>
		<div class="error-button" v-show="loadError">
			<p>
				Загрузка не удалась...
			</p>
			<button @click="fetchArticles">Загрузить</button>
		</div>
		<div v-show="isLoading">
			<img src="loading.gif" alt="">
			<button @click="cancelLoading">Отменить</button>
		</div>
		<router-view />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import { Types } from './store/types';

export default {
	name: 'App',
	components: {
	},
	methods: {
		fetchArticles() {
			store.dispatch(Types.actions.ARTICLES_LOAD, {
				path: 'http://localhost:10000/articles.json',
			});
		},
		cancelLoading() {
			store.dispatch(Types.actions.ARTICLES_LOAD_CANCEL);
		}
	},
	computed: mapState({
		loadError: state => state.moduleFetch.loadError,
		isLoading: state => state.moduleFetch.isLoading
	})
}
</script>

<style>
nav {
	margin-bottom: 10px;
}

.error-button {
	margin-bottom: 10px;
}
</style>
