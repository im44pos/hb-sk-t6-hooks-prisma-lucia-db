<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	import type { ActionData } from "./$types";
	let forms: ActionData
	import type { PageData } from "./$types";
    export let data: PageData;
	// export let form: ActionData;
	const { form, errors, enhance } = superForm(data.form)
</script>

<SuperDebug data={$form}/>

<!-- DEBUGGING & DEVELOPMENT -->
<!-- <pre>
	{JSON.stringify(form, null, 2)}
</pre> -->

<hgroup>
	<!-- <h1>Register</h1> -->
	<h1>Sign up</h1>
	<h2> </h2> <!-- Required: To make the <h1> text appear like <h1> text -->
</hgroup>

<!-- 
username
email
name
company_id		Fill in 8-digit company_identifier number
role_id 		Select from database table
-->

<form method="POST" use:enhance>
	<hgroup>
		<!-- <h1>Sign up</h1> -->
		<!-- <h2>Register</h2> -->
		<!-- <h3>To post articles, you'll need an account.</h3> -->
		<!-- <p>{JSON.stringify("Hello again")}</p> -->
	</hgroup>

	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />
	{#if $errors.name}
	    <small class="label-text-alt text-error"> {$errors.name}</small>
    {/if}

	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />
	{#if $errors.username}
		<br>
	    <small class="label-text-alt text-error"> {$errors.username}</small>
    {/if}

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required value="" />
	{#if $errors.password}
	<br>
	<small class="label-text-alt text-error"> {$errors.password}</small>
	{/if}

	<label for="usercompanyidentifier">Company number</label>
	<input type="text" id="usercompanyidentifier" name="usercompanyidentifier" required />
	{#if $errors.usercompanyidentifier}
		<br>
	    <small class="label-text-alt text-error"> {$errors.usercompanyidentifier}</small>
    {/if}

	<label for="userrole">Role</label>
	<input type="text" id="userrole" name="userrole" required />
	{#if $errors.userrole}
		<br>
	    <small class="label-text-alt text-error"> {$errors.userrole}</small>
    {/if}
	<button type="submit">Register</button>
</form>
{#if forms?.message}
	<p class="error">{forms.message}</p>
{/if}
<!-- Go to route (public)/login, to sign in with an account. -->
<!-- <p>Already have an account? <a href="/login">Login</a></p> -->
<p>Or <a href="/login">login</a> if you have an account.</p><br>

<style>
	h1 {
		text-align: center;
	}
	p {
		text-align: center;
	}
</style>