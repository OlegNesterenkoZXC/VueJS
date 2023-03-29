<template>
	<div>
		<form class="form" method="#">
			<input v-model="article.title" placeholder="Название" type="text">
			<input v-model="article.author" placeholder="Автор" type="text">
			<textarea v-model="article.body" placeholder="Текст" type="text"></textarea>
			<label><input v-model="article.published" type="checkbox" name="" id="">Published</label>
			<!-- <input v-on:click.prevent="$emit('add-article', article)" type="submit" value="Добавить"> -->
			<input v-on:click.prevent="addArticle(article)" type="submit" value="Добавить">
		</form>
	</div>
</template>

<script>
import store from '../store';
import { Types } from '@/store/types';

export default {
	name: 'ArticleForm',
	data() {
		return {
			article: {
				title: '',
				author: '',
				body: '',
				published: ''
			}
		}
	},
	methods: {
		addArticle(article) {
			const newArticle = {
				id: store.state.moduleArticles.articles.length + 1,
				published: false,
				...article
			}
			console.log(newArticle.title)
			store.commit(Types.mutations.ARTICLE_ADD_REQUESTED, [newArticle])

			this.$router.push('/');
		},
	},
}
</script>

<style scoped>
.form {
	align-items: center;
	display: flex;
	flex-direction: column;
}

input {
	margin-bottom: 10px;
}

textarea {
	margin-bottom: 10px;
}
</style>
