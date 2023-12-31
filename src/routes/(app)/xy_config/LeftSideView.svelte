<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';

	import {
		xy_zoom
	} from '$lib/states/xy_config_state';
	import { onDestroy } from 'svelte';

	import XYConfig from '$lib/(Threlte)/components/XYConfig.svelte';

	let left_camera_position = { x: 0.0, y: 0.0, z: 4.0 };

	$: left_zoom = $xy_zoom;
</script>

<T.OrthographicCamera
	makeDefault
	position={[left_camera_position.x, left_camera_position.y, left_camera_position.z]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
	zoom={left_zoom}
>
	<OrbitControls enabled />
</T.OrthographicCamera>

<T.DirectionalLight position={[ 10, 10, 10 ]}/>
<T.DirectionalLight position={[ 10, 10, -10 ]}/>
<T.DirectionalLight position={[ -10, 10, 10 ]}/>
<T.DirectionalLight position={[ -10, 10, -10 ]}/>
<T.DirectionalLight position={[ 10, -10, 10 ]}/>
<T.DirectionalLight position={[ 10, -10, -10 ]}/>
<T.DirectionalLight position={[ -10, -10, 10 ]}/>
<T.DirectionalLight position={[ -10, -10, -10 ]}/>

<XYConfig />
