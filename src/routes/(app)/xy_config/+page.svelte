<script lang="ts">
	import { Canvas } from '@threlte/core';

	import FrontView from './FrontView.svelte';
	import LeftSideView from './LeftSideView.svelte';
	import Config from './Config.svelte';

	let xy_object_mass = 99_999;
</script>

<section class="container">
	<Config />
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
			<p>(Left) Side View. Total object mass {xy_object_mass} [kg]</p>
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
	}
	.views {
		display: flex;
		/* height: 700px; */
		width: 100%;
		aspect-ratio: 8/3;
	}
	.left {
		flex: 0 0 15%;
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
		/* border: 1px solid white; */
		/* background-color: black; */
	}
</style>
