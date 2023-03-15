<template>
	<div>
		<form class="form" method="#">
			<input v-model="article.title" placeholder="Название" type="text">
			<input v-model="article.author" placeholder="Автор" type="text">
			<textarea v-model="article.body" placeholder="Текст" type="text"></textarea>
			<label><input v-model="article.published" type="checkbox" name="" id="">Published</label>
			<input v-on:click.prevent="$emit('add-article', article)" type="submit" value="Добавить">
		</form>
	</div>
</template>

<script>
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
	}
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
