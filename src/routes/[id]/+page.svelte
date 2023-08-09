<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import './markdown.css';
	export let data;
</script>

<div id="markdown">
	<SvelteMarkdown source={data.source} />
</div>
