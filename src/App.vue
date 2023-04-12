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
			</v-list>
		</v-navigation-drawer>
		<v-app-bar color="blue" elevation="3" app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title>VueJS</v-app-bar-title>
			<v-spacer></v-spacer>
			<ArticleForm />
		</v-app-bar>
		<v-main class="mb-12">
			<MyError v-show="!isSucceeded" />
			<router-view v-show="isSucceeded" />
		</v-main>
		<v-footer padless absolute>
			<v-card tile class="blue" width="100%">
				<v-row class="ma-0">
					<v-col cols="12">
						<v-card-text class="white--text text-center pa-1">
							{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import ArticleForm from './components/ArticleForm.vue';
import { Types } from './store/types';
import MyError from './components/MyError.vue';

export default {
	name: 'App',
	data: () => ({
		drawer: false,
	}),
	components: {
		ArticleForm,
		MyError
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
