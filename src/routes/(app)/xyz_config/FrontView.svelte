<script lang="ts">
    import { OrthographicCamera } from 'three';

    import { T } from '@threlte/core';
    import { OrbitControls } from '@threlte/extras';

    import {
		xyz_zoom
    } from '$lib/states/xyz_config_state';

	import { onDestroy } from 'svelte';
	
    import XYZConfig from '$lib/(Threlte)/components/XYZConfig.svelte';

    let front_camera_position = { x: -4.0, y: 0.0, z: 0.0 };
    
    $: front_zoom = $xyz_zoom
</script>

<T.OrthographicCamera 
    makeDefault 
    position = {[ front_camera_position.x, front_camera_position.y, front_camera_position.z ]}
    on:create={({ ref }) => { 
        ref.lookAt( 0, 0, 0 )
    }}
    zoom = { front_zoom }
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

<XYZConfig />