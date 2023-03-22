const store = {
	state: {
		articles: []
	},
	fetchArticles() {
		fetch('/articles.json')
			.then(response => response.json())
			.then(articles => { this.state.articles = articles.articles[0] });
		console.log("fetch data")
	},
	addArticle(article) {
		const newArticle = {
			id: this.state.articles.length + 1,
			published: false,
			...article
		}
		this.state.articles.push(newArticle);
		console.log(newArticle.title);
	},
	switchPublished(id) {
		const article = this.state.articles.find(element => element.id == id)
		article.published = !article.published
	}
}

export default store
