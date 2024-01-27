<!-- BROWSER: INSPECTOR: CONSOLE: WARNING -->
<!-- Fout tijdens het ophalen van een originele bron: request failed with status 404
Bron-URL: http://localhost:5173/view_stl_model/Canvas.svelte -->
<!-- https://firefox-source-docs.mozilla.org/devtools-user/debugger/source_map_errors/ -->
<!-- Na: HMR is de WARNING weg met volgende melding: -->
<!-- [vite] hot updated: /@fs/C:/Users/Frans/GitHub/hb-sk-t6-hooks-prisma-lucia-db/src/lib/(Threlte)/components/STL_MODEL_IMPORT.svelte -->

<script lang="ts">
	import { Canvas } from '@threlte/core';

	import FrontView from './FrontView.svelte';
	import LeftSideView from './LeftSideView.svelte';

	// import Config from './Config.svelte';
	import ConfigTP from './ConfigTP.svelte';
	// import Configuration from './Configuration.svelte';
	import ConfigSTPUI from '$lib/Layout/TweakPane/ConfigSTPUI.svelte';
	

	let object_mass = 88_888
</script>

<section class="container">
	<!-- <Config /> -->
	<!-- <Configuration /> -->
	<!-- <ConfigTP /> -->
	<ConfigSTPUI />
	<section class="views">
		<section class="left">
			<p>Front View</p>
			<section class="canvas_one">
				<Canvas>
					<FrontView />
				</Canvas>
			</section>
		</section>
		<section class="right">
			<p>(Left) Side View. Object mass {object_mass} [kg]</p>
			<section class="canvas_two">
				<Canvas>
					<LeftSideView />
				</Canvas>
			</section>
		</section>
	</section>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		/* height: 700px; */
	}
	.views {
		display: flex;
		/* height: 700px; */
		width: 100%;
		aspect-ratio: 8/3;
	}
	.left {
		flex: 0 0 25%;
	}
	.right {
		flex: 1;
	}
	.canvas_one {
		height: 100%;
		border: 1px solid black;
		/* border: 1px solid white; */
		/* background-color: black; */
	}
	.canvas_two {
		height: 100%;
		border: 1px solid black;
		/* border: 1px solid white;
		background-color: black; */
	}
</style>
