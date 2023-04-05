<template>
	<v-container>
		<v-card :color="cardColor" elevation="5">
			<v-img :src="image" position="center"></v-img>
			<v-card-title>
				<router-link :to="articleUrl">{{ title }}</router-link>
			</v-card-title>
			<v-card-subtitle class="text-left">Author:
				<span :style="{ fontStyle: fStyle }">
					{{ upperAuthor }}
				</span>
			</v-card-subtitle>
			<v-card-text class="text-left">{{ body }}</v-card-text>
			<v-card-actions justify="end">
				<v-btn @click.prevent="switchPublished()">{{ publishedBtnText }}</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
import { Types } from '@/store/types';
import { RouterLink } from 'vue-router';
import store from '../store';

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
		image: String,
		published: {
			type: Boolean,
		}
	},
	methods: {
		switchPublished() {
			store.commit(Types.mutations.ARTICLE_SWITCH_STATUS, this.id)
		}
	},
	computed: {
		publishedBtnText() {
			return this.published ? 'Unpublish' : 'Publish';
		},
		cardColor() {
			return this.published ? 'white' : 'red';
		},
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

<style scoped></style>
