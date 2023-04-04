import axios from "axios";
import { Types } from "@/store/types";

export default {
	state: () => ({
		isRequested: false,
		isSucceeded: false,
		isFailed: false,
		isCanceled: false,
		fetchController: AbortController,
	}),
	mutations: {
		switchLoadStatus(state, status) {
			state.isLoading = status;
		},
		switchLoadErrorStatus(state, status) {
			state.loadError = status;
		},
		createNewFetchController(state) {
			state.fetchController = new AbortController();
		},
		articlesRequested(state) {
			state.isRequested = true;
			state.isFailed = false;
			state.isSucceeded = false;
			state.isCanceled = false;
			state.fetchController = new AbortController();
		},
		articlesSucceeded(state) {
			state.isRequested = false;
			state.isFailed = false;
			state.isSucceeded = true;
			state.isCanceled = false;
		},
		articlesFailed(state) {
			state.isRequested = false;
			state.isFailed = true;
			state.isSucceeded = false;
			state.isCanceled = false;
		},
		articlesCanceled(state) {
			state.isRequested = false;
			state.isFailed = true;
			state.isSucceeded = false;
			state.isCanceled = true;
		}
	},
	actions: {
		fetchArticles(context, payload) {
			// context.commit('switchLoadStatus', true);
			// context.commit('switchLoadErrorStatus', false);
			context.commit(Types.mutations.ARTICLES_REQUESTED);

			console.log("fetch data");

			axios
				.get(payload.path, {
					signal: context.state.fetchController.signal
				})
				.then(response => {
					context.commit(Types.mutations.ARTICLE_ADD_REQUESTED, response.data);
					context.commit(Types.mutations.ARTICLES_SUCCEEDED)
				})
				.catch((reason) => {
					if (reason.message == 'canceled') {
						context.commit(Types.mutations.ARTICLES_CANCELED);
					} else {
						context.commit(Types.mutations.ARTICLES_FAILED)
					}
				})
		},
		cancelLoading(context) {
			context.state.fetchController.abort();
		},
		// switchLoadErrorStatus(context, payload) {
		// 	context.commit('switchLoadErrorStatus', payload.status)
		// }
		// fetchArticles(context, payload) {
		// 	context.commit('switchLoadStatus', true);
		// 	context.commit('switchLoadErrorStatus', false);
		// 	fetch(payload.path)
		// 		.then(response => response.json())
		// 		.then(articles => {
		// 			context.commit('fetchArticles', articles.articles[0]);
		// 		})
		// 		.catch(() => context.commit('switchLoadErrorStatus', true))
		// 		.finally(() => context.commit('switchLoadStatus', false));
		// 	console.log("fetch data")
		// },
	}
}
