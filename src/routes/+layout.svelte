<script>
	import './styles.css';
</script>

<div class="app">
	<header>
		<p>Kenny</p>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; kennycha</p>
	</footer>
</div>

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
