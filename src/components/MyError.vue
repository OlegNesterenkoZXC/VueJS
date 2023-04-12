<template>
	<v-container>
		<v-card class="pa-10" v-show="isCanceled">
			<v-card-title>Загрузка отменена</v-card-title>
			<v-card-actions><v-btn @click="fetchArticles">Загрузить</v-btn></v-card-actions>
		</v-card>
		<v-card class="pa-10" v-show="!isCanceled && isFailed">
			<v-card-title>Загрузка не удалась...</v-card-title>
			<v-card-actions><v-btn @click="fetchArticles">Загрузить</v-btn></v-card-actions>
		</v-card>
		<v-card class="pa-10" v-show="isRequested">
			<v-card-title>Загрузка...</v-card-title>
			<v-card-subtitle><v-progress-circular indeterminate color="primary"></v-progress-circular></v-card-subtitle>
			<v-card-actions><v-btn @click="cancelLoading">Отменить</v-btn></v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store';
import { Types } from '@/store/types';

export default {
	name: 'MyError',
	props: {

	},
	data() {
		return {
		}
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
		isFailed: state => state.moduleFetch.isFailed,
		isCanceled: state => state.moduleFetch.isCanceled,
	})
}
</script>

<style scoped></style>
