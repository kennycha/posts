<script>
	import { Router, Route } from 'svelte-routing';
	import Post from './lib/Post.svelte';
	import PostList from './lib/PostList.svelte';
	import './styles.css';
</script>

<Router basepath="/posts/">
	<div class="app">
		<header>
			<p>Kenny</p>
		</header>

		<main>
			<Route path="/" component={PostList} />
			<Route path="/:id" component={Post} />
		</main>

		<footer>
			<p>&copy; kennycha</p>
		</footer>
	</div>
</Router>

<style>
	.app {
		display: grid;
		grid-template-rows: 80px 1fr 60px;
		min-height: 100vh;
	}

	header {
	}

	main {
	}

	footer {
	}
</style>
