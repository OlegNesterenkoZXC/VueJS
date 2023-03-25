import Vue from 'vue'
import Vuex from 'vuex'
import services from '../services'

Vue.use(Vuex)

const moduleArticles = {
	state: () => ({
		articles: []
	}),
	mutations: {
		fetchArticles(state, articles) {
			state.articles = articles;
		},
		addArticle(state, article) {
			state.articles.push(article);
		},
		switchPublished(state, id) {
			const article = state.articles.find(element => element.id == id);
			article.published = !article.published
		},
	},
	actions: {
		addArticle(context, payload) {
			const newArticle = {
				id: context.state.articles.length + 1,
				published: false,
				...payload.article
			}
			console.log(newArticle.title);
			context.commit('addArticle', newArticle);
		},
		switchPublished(context, payload) {
			context.commit('switchPublished', payload.id)
		}
	}
}

export default new Vuex.Store({
	modules: {
		moduleArticles: moduleArticles,
		moduleFetch: services
	},
})

// const moduleErrors = {
// 	state: () => ({
// 		loadError: false
// 	}),
// 	mutations: {
// 		switchLoadErrorStatus(state, status) {
// 			state.loadError = status;
// 		}
// 	},
// 	actions: {
// 		switchLoadErrorStatus(context, payload) {
// 			context.commit('switchLoadErrorStatus', payload.status)
// 		}
// 	}
// }

// export default new Vuex.Store({
// 	modules: {
// 		moduleArticles: moduleArticles,
// 		moduleErrors: moduleErrors
// 	},
// 	state: {
// 		articles: [],
// 		succesLoad: false,
// 	},
// 	mutations: {
// 		fetchArticles(state, articles) {
// 			state.articles = articles;
// 		},
// 		addArticle(state, article) {
// 			state.articles.push(article);
// 		},
// 		switchPublished(state, id) {
// 			const article = state.articles.find(element => element.id == id);
// 			article.published = !article.published
// 		},
// 		switchLoadStatus(state, status) {
// 			state.succesLoad = status;
// 		}
// 	},
// 	actions: {
// 		fetchArticles(context, payload) {
// 			fetch(payload.path)
// 				.then(response => response.json())
// 				.then(articles => {
// 					context.commit('fetchArticles', articles.articles[0]);
// 					context.commit('switchLoadStatus', true);
// 				})
// 				.catch(() => context.commit('switchLoadStatus', false));
// 			console.log("fetch data")
// 		},
// 		addArticle(context, payload) {
// 			const newArticle = {
// 				id: this.state.articles.length + 1,
// 				published: false,
// 				...payload.article
// 			}
// 			console.log(newArticle.title);
// 			context.commit('addArticle', newArticle);
// 		},
// 		switchPublished(context, payload) {
// 			context.commit('switchPublished', payload.id)
// 		}
// 	},
// })
