<script lang="ts">
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	import type { ActionData } from "./$types";
	export let forms: ActionData
	import type { PageData } from "./$types";
    export let data: PageData;
	const { form, errors, enhance } = superForm(data.form)
</script>



<!-- // // FOR DEVELOPMENT AND DEBUGGING ONLY -->
<SuperDebug data={$form}/>
<!-- <pre>
	{JSON.stringify(form, null, 2)}
</pre> -->


<!-- <hgroup> -->
	<!-- <h1>Sign in</h1> -->
	<!-- <h2></h2> tags are Required: To make the <h1> text appear like <h1> text -->
	<!-- <h2> </h2> -->
<!-- </hgroup> -->

<!-- Form POST method to login -->
<br>
<form method="POST" use:enhance>
	<fieldset class="fieldset">
		<legend class="legend">Sign Up</legend>
		<div class="settings">
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />
			{#if $errors.username}
				<br>
				<small class="label-text-alt text-error"> {$errors.username}</small>
			{/if}
			<br>

			<!-- <label for="useremail">E-mail address</label> -->
			<!-- <input type="email" id="useremail" name="useremail" required /> -->
			<!-- <input type="email" id="useremail" name="useremail" />
			{#if $errors.email}
				<br>
				<small class="label-text-alt text-error"> {$errors.email}</small>
			{/if}
			<br> -->

			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />
			<br>
			
			<p></p><p></p>
			<button type="submit">Login</button>
			{#if $errors.password}
			<br>
			<small class="label-text-alt text-error"> {$errors.password}</small>
			{/if}
		</div>
	</fieldset>
</form>
{#if forms?.message}
	<p class="error">{forms.message}</p>
{/if}

<!-- Go to route (public)/register, to create an account. -->
<!-- <p>Don't have an account? <a href="/register">Register</a></p> -->
<p>Or <a href="/register">REGISTER</a> to create an account.</p><br>

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
