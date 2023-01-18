<script lang="ts">
	import { user } from '../../store/store.js';
</script>

<svelte:head>
	<title>Malaya Flashcard | Register</title> 
</svelte:head>

<main>
	<header>
		<div>
			<h1>Register</h1>
		</div>
	</header>
	<section id="register-section">
		<form>
			<label>Username</label>
			<input type="text" bind:value={$user.username} />
			<label>Password</label>
			<input type="password" bind:value={$user.password} /> 
			<div>
				<button>Register</button> 
			</div>
		</form>
	</section>
</main> 

<style>

</style>