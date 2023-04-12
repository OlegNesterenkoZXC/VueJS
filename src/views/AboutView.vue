<template>
	<v-container>
		<v-sheet class="ma-5" elevation="3">
			<v-carousel v-if="articles.length">
				<v-carousel-item v-for="article in articles" :key="article.id">
					<v-img :src="article.image"></v-img>
				</v-carousel-item>
			</v-carousel>
		</v-sheet>
		<v-sheet class="ma-5" elevation="3">
			<v-simple-table>
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-left">
								Name
							</th>
							<th class="text-left">
								Calories
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in desserts" :key="item.name">
							<td>{{ item.name }}</td>
							<td>{{ item.calories }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-sheet>

	</v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			desserts: [
				{
					name: 'Frozen Yogurt',
					calories: 159,
				},
				{
					name: 'Ice cream sandwich',
					calories: 237,
				},
				{
					name: 'Eclair',
					calories: 262,
				},
				{
					name: 'Cupcake',
					calories: 305,
				},
				{
					name: 'Gingerbread',
					calories: 356,
				},
				{
					name: 'Jelly bean',
					calories: 375,
				},
				{
					name: 'Lollipop',
					calories: 392,
				},
				{
					name: 'Honeycomb',
					calories: 408,
				},
				{
					name: 'Donut',
					calories: 452,
				},
				{
					name: 'KitKat',
					calories: 518,
				},
			],

		}
	},
	computed: mapState({
		articles: state => state.moduleArticles.articles,
	})
}
</script>