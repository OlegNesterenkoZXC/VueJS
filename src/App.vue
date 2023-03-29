<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/form">Add new article</router-link>
		</nav>
		<div class="error-button" v-show="isFailed">
			<p v-show="isCanceled">
				Загрузка отменена!
			</p>
			<p v-show="!isCanceled">
				Загрузка не удалась...
			</p>
			<button @click="fetchArticles">Загрузить</button>
		</div>
		<div v-show="isRequested">
			<img src="loading.gif" alt="Loading...">
			<button @click="cancelLoading">Отменить</button>
		</div>
		<router-view v-show="isSucceeded" />
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
		isRequested: state => state.moduleFetch.isRequested,
		isSucceeded: state => state.moduleFetch.isSucceeded,
		isFailed: state => state.moduleFetch.isFailed,
		isCanceled: state => state.moduleFetch.isCanceled,
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
