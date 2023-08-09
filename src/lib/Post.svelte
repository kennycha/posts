<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import './markdown.css';

	export let id: string;

	let source: string;
	let hasError = false;

	onMount(async () => {
		if (!id) {
			hasError = true;
			return;
		}

		const res = await fetch(`posts/${id}.md`);
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
