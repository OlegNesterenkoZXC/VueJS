<template>
	<div>
		<!-- <ArticleForm v-on:add-article="addArticle($event)" /> -->
		<MyArticle v-for="article in this.$root.$data.articles" :key="article.id" :author="article.author"
			:body="article.body" :title="article.title" :published="article.published" :id="article.id"
			v-on:click="article.published = !article.published" />

	</div>
</template>

<script>
import MyArticle from './MyArticle.vue';
// import ArticleForm from './ArticleForm.vue';
import store from '../store/index.js';

export default {
	name: "ArticleList",
	components: {
		MyArticle,
		// ArticleForm
	},
	methods: {
		// addArticle(article) {
		// 	const newArticle = {
		// 		id: this.articles.length + 1,
		// 		published: false,
		// 		...article
		// 	}
		// 	this.articles.push(newArticle);
		// 	console.log(newArticle.title);
		// }
		addArticle(article) {
			store.addArticle(article);
		}
	},

	beforeMount: function () {
		// fetch('/articles.json')
		// 	.then(response => response.json())
		// 	.then(articles => { this.articles = articles.articles[0] });
		// console.log("fetch data")

	},
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
