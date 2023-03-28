import axios from "axios";
import { Types } from "@/store/types";

export default {
	state: () => ({
		isLoading: false,
		loadError: false,
		fetchController: new AbortController(),
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
		}
	},
	actions: {
		fetchArticles(context, payload) {
			context.commit('switchLoadStatus', true);
			context.commit('switchLoadErrorStatus', false);

			axios
				.get(payload.path, {
					signal: context.state.fetchController.signal
				})
				.then(response => {
					context.commit(Types.mutations.ARTICLES_SUCCEEDED, response.data.articles);
				})
				.catch(() => context.commit('switchLoadErrorStatus', true))
				.finally(() => context.commit('switchLoadStatus', false));

			console.log("fetch data");
		},
		cancelLoading(context) {
			context.state.fetchController.abort();
			context.commit('createNewFetchController');
		},
		switchLoadErrorStatus(context, payload) {
			context.commit('switchLoadErrorStatus', payload.status)
		}
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
