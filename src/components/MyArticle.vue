<template>
	<div class="article" :class="{ notPublished: !published }">
		<p>
			<router-link :to="articleUrl">{{ title }}</router-link>
		</p>
		<p :style="{ fontStyle: fStyle }">{{ upperAuthor }}</p>
		<p>{{ body }}</p>
		<!-- <button @click.prevent="$emit('click')"> Переключить!</button> -->
		<button @click.prevent="switchPublished()"> Переключить!</button>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import store from '../store/index.js';

export default {
	name: "My-Article",
	props: {
		id: Number,
		title: String,
		author: {
			type: String,
			default: "",
		},
		body: String,
		published: {
			type: Boolean,
		}
	},
	methods: {
		switchPublished() {
			store.switchPublished(this.id)
		}
	},
	computed: {
		fStyle() {
			return this.published ? "italic" : "normal";
		},
		upperAuthor() {
			return this.author.toUpperCase();
		},
		articleUrl() {
			return '/article/' + this.id;
		}
	},
	watch: {
		published() {
			console.log(this.title + " " + this.published);
		}
	},
	components: { RouterLink }
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
