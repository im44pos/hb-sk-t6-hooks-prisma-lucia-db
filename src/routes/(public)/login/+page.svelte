<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	import type { ActionData } from "./$types";
	export let forms: ActionData
	import type { PageData } from "./$types";
    export let data: PageData;
	const { form, errors, enhance } = superForm(data.form)
</script>

<SuperDebug data={$form}/>

<!-- DEBUGGING & DEVELOPMENT -->
<!-- <pre>
	{JSON.stringify(form, null, 2)}
</pre> -->

<hgroup>
	<h1>Sign in</h1>
	<!-- <h2></h2> tags are Required: To make the <h1> text appear like <h1> text -->
	<h2> </h2>
</hgroup>

<!-- Form POST method to login -->
<form method="POST" use:enhance>
	<hgroup>
		<!-- <h1>Sign in</h1> -->
		<!-- <h2>Login</h2> -->
		<!-- <h3>text</h3> -->
	</hgroup>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />
	{#if $errors.username}
		<br>
	    <small class="label-text-alt text-error"> {$errors.username}</small>
    {/if}

	<label for="useremail">E-mail address</label>
	<input type="email" id="useremail" name="useremail" required />
	{#if $errors.useremail}
		<br>
	    <small class="label-text-alt text-error"> {$errors.useremail}</small>
    {/if}

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />
	
	<button type="submit">Login</button>
	{#if $errors.password}
	<br>
	<small class="label-text-alt text-error"> {$errors.password}</small>
	{/if}
</form>
{#if forms?.message}
	<p class="error">{forms.message}</p>
{/if}

<!-- Go to route (public)/register, to create an account. -->
<!-- <p>Don't have an account? <a href="/register">Register</a></p> -->
<p>Or <a href="/register">REGISTER</a> to create an account.</p><br>

<style>
	h1 {
		text-align: center;
	}
	p {
		text-align: center;
	}
</style>
