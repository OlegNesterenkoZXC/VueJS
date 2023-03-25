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
		<router-view />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';

export default {
	name: 'App',
	components: {
	},
	methods: {
		fetchArticles() {
			store.dispatch('fetchArticles', {
				path: '/articles.json',
			});
		}
	},
	computed: mapState({
		loadError: state => state.moduleFetch.loadError
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
