<template>
	<v-app id="app">
		<v-navigation-drawer app v-model="drawer">
			<v-list>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="text-h6">Menu</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-divider>

			</v-divider>
			<v-list dense nav>
				<v-list-item link to="/">
					<v-list-item-icon>
						<v-icon>mdi-home-circle</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/about">
					<v-list-item-icon>
						<v-icon>mdi-information</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>About</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/form">
					<v-list-item-icon>
						<v-icon>mdi-plus-box</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Add your article</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar color="blue" elevation="3" app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title>VueJS</v-app-bar-title>
		</v-app-bar>
		<v-main>
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
		</v-main>
	</v-app>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import { Types } from './store/types';

export default {
	name: 'App',
	data: () => ({
		drawer: false,
	}),
	components: {
	},
	methods: {
		fetchArticles() {
			store.dispatch(Types.actions.ARTICLES_LOAD, {
				path: 'http://localhost:10000/articles',
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
