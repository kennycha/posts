<script lang="ts">
	import { Router, Link } from 'svelte-routing';

	const POSTS = [{ text: '첫 번째 글', id: 1 }];
</script>

<Router basepath="/posts/">
	{#each POSTS as { text, id }}
		<Link to={`/posts/${id}`}>{text}</Link>
	{/each}
</Router>
