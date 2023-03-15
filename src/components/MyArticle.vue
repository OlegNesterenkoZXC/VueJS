<template>
	<div class="article" :class="{ notPublished: !published }">
		<p>{{ title }}</p>
		<p :style="{ fontStyle: fStyle }">{{ upperAuthor }}</p>
		<p>{{ body }}</p>
		<button @click.prevent="$emit('click')"> Переключить!</button>
	</div>
</template>

<script>
export default {
	name: 'My-Article',
	props: {
		title: String,
		author: {
			type: String,
			default: '',
		},
		body: String,
		published: {
			type: Boolean,
			required: true,
		}
	},
	computed: {
		fStyle() {
			return this.published ? 'italic' : 'normal';
		},
		upperAuthor() {
			return this.author.toUpperCase();
		}
	},
	watch: {
		published() {
			console.log(this.title + " " + this.published)
		}
	}
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
	padding-bottom: 10px;
}
</style>
