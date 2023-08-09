<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import './markdown.css';

	let source: string;
	let hasError = false;

	onMount(async () => {
		const res = await fetch(`posts/${$page.params.id}.md`);
		if (res.status === 404) {
			hasError = true;
		} else {
			source = await res.text();
		}
	});
</script>

{#if hasError}
	<div class="error">404: not found</div>
{:else}
	<div id="markdown">
		<SvelteMarkdown {source} />
	</div>
{/if}
