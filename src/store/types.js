export const Types = {
	mutations: {
		ARTICLES_REQUESTED: 'articlesRequested',
		ARTICLES_SUCCEEDED: 'articlesSucceeded',
		ARTICLES_FAILED: 'articlesFailed',
		ARTICLES_CANCELED: 'articlesCanceled',
		ARTICLE_ADD_REQUESTED: 'pushArticles',
		ARTICLE_ADD_SUCCEDED: '',
		ARTICLE_ADD_FAILED: '',
		ARTICLE_SWITCH_STATUS: 'switchStatus',
	},
	actions: {
		ARTICLES_LOAD: 'fetchArticles',
		ARTICLES_LOAD_CANCEL: 'cancelLoading',
	},
	request_status: {
		REQUESTED: 'REQUESTED',
		SUCCEEDED: 'SUCCEEDED',
		FAILED: 'FAILED'
	}
}