<template>
	<div>
		<ArticleForm v-on:add-article="addArticle($event)" />
		<MyArticle v-for="article in articles" :key="article.id" :author="article.author" :body="article.body"
			:title="article.title" :published="article.published" v-on:click="article.published = !article.published" />

	</div>
</template>

<script>
import MyArticle from './MyArticle.vue'
import ArticleForm from './ArticleForm.vue';

export default {
	name: "ArticleList",
	components: {
		MyArticle,
		ArticleForm
	},
	methods: {
		addArticle(article) {
			const newArticle = {
				id: this.articles.length + 1,
				published: false,
				...article
			}
			this.articles.push(newArticle);
			console.log(newArticle.title);
		}
	},

	beforeMount: function () {
		fetch('/articles.json')
			.then(response => response.json())
			.then(articles => { this.articles = articles.articles[0] });
		console.log("fetch data")
	},
	data() {
		return {
			articles: [
				{
					id: 1,
					title: "Title 1",
					author: "John",
					body: "Body 1",
					published: false,
				},
				{
					id: 2,
					title: "Title 2",
					author: "Alex",
					body: "Body 2",
					published: true,
				},
				{
					id: 3,
					title: "Title 3",
					author: "Sam",
					body: "Body 3",
					published: false,
				},
				{
					id: 4,
					title: "Title 4",
					author: "Smith",
					body: "Body 4",
					published: true,
				},
			]
		};
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
