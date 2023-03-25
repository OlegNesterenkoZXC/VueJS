export default {
	state: () => ({
		isLoading: false,
		loadError: false
	}),
	mutations: {
		switchLoadStatus(state, status) {
			state.isLoading = status;
		},
		switchLoadErrorStatus(state, status) {
			state.loadError = status;
		}
	},
	actions: {
		fetchArticles(context, payload) {
			context.commit('switchLoadStatus', true);
			context.commit('switchLoadErrorStatus', false);
			fetch(payload.path)
				.then(response => response.json())
				.then(articles => {
					context.commit('fetchArticles', articles.articles[0]);
				})
				.catch(() => context.commit('switchLoadErrorStatus', true))
				.finally(() => context.commit('switchLoadStatus', false));
			console.log("fetch data")
		},
		switchLoadErrorStatus(context, payload) {
			context.commit('switchLoadErrorStatus', payload.status)
		}
	}
}
