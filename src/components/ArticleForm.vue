<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="3">
				<v-dialog v-model="dialog" width="500">
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="blue lighten-2" dark v-bind="attrs" v-on="on">
							Добавить статью
						</v-btn>
					</template>
					<v-card class="pa-5">
						<v-form>
							<v-text-field v-model="article.title" :counter="15" label="Название" required></v-text-field>
							<v-text-field v-model="article.author" :counter="15" label="Автор" required></v-text-field>
							<v-textarea v-model="article.body" label="Статья" required> </v-textarea>
							<v-checkbox v-model="article.published" label="Опубликована" required></v-checkbox>
							<v-btn @click="addArticle(article)">
								Добавить
							</v-btn>
						</v-form>
					</v-card>
				</v-dialog>

			</v-col>
		</v-row>

	</v-container>
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
