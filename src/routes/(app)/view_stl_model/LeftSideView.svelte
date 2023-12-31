<script lang="ts">
    import { MeshStandardMaterial, OrthographicCamera } from 'three';

    import { T } from '@threlte/core';
    import { OrbitControls } from '@threlte/extras';

    import {
		view_zoom
    } from '$lib/states/view_stl_model_state';
    
	import { onDestroy } from 'svelte';
	
    import View_STL_Model from '$lib/(Threlte)/components/View_STL_Model.svelte';

    let left_camera_position = { x: 0.0, y: 0.0, z: 4.0 };
    $: left_zoom = $view_zoom;
</script>

<T.OrthographicCamera 
    makeDefault 
    position = {[ left_camera_position.x, left_camera_position.y, left_camera_position.z ]}
    on:create={({ ref }) => { 
        ref.lookAt( 0, 0, 0 )
    }}
    zoom = { left_zoom }
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

<View_STL_Model />