<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';

	import {
		xy_zoom
    } from '$lib/states/xy_config_state';

	import { onDestroy } from 'svelte';

	import XYConfig from '$lib/(Threlte)/components/XYConfig.svelte';

	let front_camera_position = { x: -4.0, y: 0.0, z: 0.0 };

	$: front_zoom = $xy_zoom
</script>

<T.OrthographicCamera
	makeDefault
	position={[front_camera_position.x, front_camera_position.y, front_camera_position.z]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
	zoom={front_zoom}
>
	<OrbitControls enabled />
</T.OrthographicCamera>

<T.DirectionalLight position={[10, 10, 10]} />
<T.DirectionalLight position={[10, 10, -10]} />
<T.DirectionalLight position={[-10, 10, 10]} />
<T.DirectionalLight position={[-10, 10, -10]} />
<T.DirectionalLight position={[10, -10, 10]} />
<T.DirectionalLight position={[10, -10, -10]} />
<T.DirectionalLight position={[-10, -10, 10]} />
<T.DirectionalLight position={[-10, -10, -10]} />

<XYConfig />
