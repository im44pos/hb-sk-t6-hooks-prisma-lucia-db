<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	import type { ActionData } from "./$types";
	let forms: ActionData
	// // export let form: ActionData;

	import type { PageData } from "./$types";
    export let data: PageData;
	
	const { form, errors, enhance } = superForm(data.form)

	$: ({ dbroles } = data );

	let placeholder = "select ..."
</script>

<!-- // // FOR DEVELOPMENT AND DEBUGGING ONLY -->
<SuperDebug data={$form}/>
<!-- <pre>
	{JSON.stringify(form, null, 2)}
</pre> -->

<!-- id
company_id
username
email
name
role_id
auth_session
key
company
role -->

<br>
<form method="POST" use:enhance>
	<fieldset class="fieldset">
		<legend class="legend">Sign Up</legend>
		<div class="settings">
			<!-- <label for="company_identifier">Company number</label>
			<input type="text" id="company_identifier" name="company_identifier" required />
			{#if $errors.company_identifier}
				<br>
				<small class="label-text-alt text-error"> {$errors.company_identifier}</small>
			{/if}
			<br/> -->
		
			<!-- <label for="userrole">Role</label>
			<select 
				id = "userrole"
				name = "userrole"
				required
			>
				{#if placeholder}
					<option value="" disabled selected>{placeholder}</option>
				{/if}
				{#each dbroles as dbrole}
					<option value = {dbrole.role_name}>
						{dbrole.role_name}
					</option>
				{/each}
			</select>
			{#if $errors.userrole}
				<br>
				<small class="error">{$errors.userrole}</small>
			{/if}
			<br/> -->

			<label for="name">Name</label>
			<input type="text" id="name" name="name" required />
			{#if $errors.name}
				<small class="label-text-alt text-error"> {$errors.name}</small>
			{/if}
			<br/>
		
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />
			{#if $errors.username}
				<br>
				<small class="label-text-alt text-error"> {$errors.username}</small>
			{/if}
			<br/>
		
			<label for="email">E-mail</label>
			<input type="text" id="email" name="email" required />
			{#if $errors.email}
				<br>
				<small class="label-text-alt text-error"> {$errors.email}</small>
			{/if}
			<br/>
		
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required value="" />
			{#if $errors.password}
				<br>
				<small class="label-text-alt text-error"> {$errors.password}</small>
			{/if}
			<br/>
			
			<p></p><p></p>
			<button type="submit">Register</button>
		</div>
	</fieldset>
</form>
{#if forms?.message}
	<p class="error">{"forms?.message class='error'" + forms.message}</p>
{/if}
<!-- Go to route (public)/login, to sign in with an account. -->
<!-- <p>Already have an account? <a href="/login">Login</a></p> -->
<p>Or <a href="/login">LOGIN</a> if you have an account.</p><br>

<style>
	/* h1 {
		text-align: center;
	} */
	p {
		text-align: center;
	}
	/* CSS */
    div.settings {
        display: grid;
        /* text-align: center; */
        grid-template-columns: max-content max-content max-content;
        grid-gap: 5px;
    }
    div.settings label       { text-align:right; }
    div.settings label:after { content: ":"; }
</style>