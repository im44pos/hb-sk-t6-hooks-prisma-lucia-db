<script lang="ts">
	// import '../app.scss';
	// import '@picocss/pico';

	// import type { PageData } from './$types';
	// import { enhance } from '$app/forms';
	// export let data: PageData;
	
	import { page } from '$app/stores';
</script>

<!-- <pre> -->
<!-- {JSON.stringify(data)} -->
<!-- {JSON.stringify(user)} -->
<!-- </pre> -->

<nav>
	<form method="POST">
		<!-- <li><a href="/">Home</a></li> -->

		<!-- THIS IF-ESLE STATEMENT DOES NOT WORK AS SUPPOSED TO -->
		<!-- Where comes "data" from? -->
		<!-- Can only use .articles, .userId or .username on data! -->
		<!-- {#if !data.user} THIS IS THE ORIGINAL CODE FROM HB -->
		<!-- Can't I just check for a session to exist ? ? ? -->
		<!-- // // FOR DEBUGGING & DEVELOPMENT: -->
		{JSON.stringify($page.data.username)}
		<!-- Result true false -->
		{JSON.stringify($page.data.username == null)}

		<!-- Comparison requires 2x =: "==" ! ? ? ? -->
		{#if ($page.data.username == null)}
			<a href="/register">Register</a>
			<a href="/login" role="button">Login</a>
		{:else}
			<!-- Does not reload page -->
			<!-- Add some action?: formaction="?/home" type="submit" -->
			<a href="/">Home</a>
			<!-- <button formaction="?/home" type="submit" name="/home" value="/home"> Home </button> -->
			<!-- <a href="/"><button formaction="?/home" type="submit" name="/home" value="/home"> a href/ Home </button></a> -->
			
			<a href="/quotation" aria-current={$page.url.pathname === '/quotation'}> Quotation </a>
			
			<a href="/view_stl_model" aria-current={$page.url.pathname === '/view_stl_model'}> STL Model </a>
			<a href="/xy_config" aria-current={$page.url.pathname === '/xy_config'}> XY Config </a>
			<a href="/xyz_config" aria-current={$page.url.pathname === '/xyz_config'}> XYZ Config </a>
			
			<a href="/quotations" aria-current={$page.url.pathname === '/quotations'}> Quotations </a>
			<button formaction="?/logout" type="submit" name="/logout" value="/logout">Logout</button>
		{/if}
	</form>
</nav>

<header>
	<h1>
		hb-sk-t6-hooks-prisma-lucia-db
	</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<!-- https://business.gov.nl/regulation/copyright/ -->
	Copyright &#169; 2023 QWisioN. All rights reserved. Alle rechten voorbehouden.
</footer>


<style>
	header, footer {
		text-align: center;
	}
</style>
