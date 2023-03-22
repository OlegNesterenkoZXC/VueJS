<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/form">Add new article</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {
	},
}
</script>

<style>
nav {
	margin-bottom: 10px;
}
</style>
