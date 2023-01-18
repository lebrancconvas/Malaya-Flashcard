<script lang="ts">
	import { test } from '../store/store.js';
</script>

<svelte:head>
	<title>Malaya Flashcard</title> 
</svelte:head>

<main>
	<header>
		<div>
			<h1>Malaya Flashcard</h1> 
		</div>
		<div>
			<h2>Hello {$test.name} </h2> 
		</div>
	</header>
</main>