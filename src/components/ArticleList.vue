<template>
	<div>
		<!-- <ArticleForm v-on:add-article="addArticle($event)" /> -->
		<v-container>
			<MyArticle v-for="article in articles" :key="article.id" :author="article.author" :body="article.body"
				:title="article.title" :published="article.published" :id="article.id" :image="article.image"
				class="mb-5" />
		</v-container>
	</div>
</template>

<script>
import MyArticle from './MyArticle.vue';
import { mapState } from 'vuex';

export default {
	name: "ArticleList",
	components: {
		MyArticle,
	},
	computed: mapState({
		articles: state => state.moduleArticles.articles,
	})
}
</script>

<style scoped>
.notPublished {
	background-color: burlywood;
}

.article {
	border: 1px solid black;
	margin-bottom: 15px;
	text-align: center;
}
</style>
