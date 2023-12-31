<script lang="ts">
	import { AxesHelper, GridHelper, BoxGeometry } from 'three';

	import { DEG2RAD } from 'three/src/math/MathUtils';

	import { T } from '@threlte/core';

	import { Color } from 'three';

	import STL_MODEL_IMPORT from '$lib/(Threlte)/components/STL_MODEL_IMPORT.svelte';

	import { 
		product_position_x, 
		product_position_y, 
		product_position_z, 
		product_rotation_x, 
		product_rotation_y, 
		product_rotation_z, 
		// product_color_hex,
    } from '$lib/states/view_stl_model_state';

	import {
        boundingbox_x,
        boundingbox_y,
        boundingbox_z, 
		bbox_position_x,
		bbox_position_y, 
		bbox_position_z, 
		bbox_rotation_x, 
		bbox_rotation_y, 
		bbox_rotation_z,
		bbox_color_hex, 
		bbox_opacity,
    } from '$lib/states/view_stl_model_state';

	import { onDestroy } from 'svelte';

	const scene_axes = [1.0];
	const scene_grid = [6, 6];

	const model_axes = [0.25];

	// Initialize with values from src/routes/view_model/state.ts
	let glb_pos_x = $product_position_x;
	let glb_pos_y = $product_position_y;
	let glb_pos_z = $product_position_z;

	let glb_rot_x = $product_rotation_x;
	let glb_rot_y = $product_rotation_y;
	let glb_rot_z = $product_rotation_z;

	// let product_color = $product_color_hex;

	// // Bounding Box dimensions
	let bbox_x = $boundingbox_x
    let bbox_y = $boundingbox_y
    let bbox_z = $boundingbox_z

	let bbox_pos_x = $bbox_position_x
	let bbox_pos_y = $bbox_position_y
	let bbox_pos_z = $bbox_position_z

	let bbox_rot_x = $bbox_rotation_x
	let bbox_rot_y = $bbox_rotation_y
	let bbox_rot_z = $bbox_rotation_z

	// let bbox_color = $bbox_color_hex
	// const bbox_color = new Color($bbox_color_hex)

	let m = 1000;
	let dm = 100;
	let cm = 10;
	let mm = 1;
	let inch = 25.4;

	let glb_model = {
		position: { 
			x: glb_pos_x, 
			y: glb_pos_y, 
			z: glb_pos_z
		},
		rotation: {
			x: DEG2RAD * glb_rot_x,
			y: DEG2RAD * glb_rot_y,
			z: DEG2RAD * glb_rot_z
		},
		scale: mm,
		// color: product_color
	};

	let bbox = {
		position: { 
			x: bbox_pos_x, 
			y: bbox_pos_y, 
			z: bbox_pos_z 
		},
		rotation: {
			x: DEG2RAD * bbox_rot_x,
			y: DEG2RAD * bbox_rot_y,
			z: DEG2RAD * bbox_rot_z
		},
		scale: mm,
		// color: bbox_color,
		opacity: 0.315,
	};
	// console.log(bbox.position.x)
	// console.log(bbox.position.y)
	// console.log(bbox.position.z)
</script>

<!-- <div use:action /> -->

<T.AxesHelper args={scene_axes} />
<!-- <T.GridHelper args = { scene_grid } /> -->

<!-- To Do: SOLVE POSITION ERROR -->
<!-- Object Oriented Bounding Box -->
<!-- position = {[ 0.000, 0.000, 0.0500 ]} -->
<!-- position = {[ bbox.position.x, bbox.position.y, bbox.position.z ]}
		rotation = {[ bbox.rotation.x, bbox.rotation.y, bbox.rotation.z ]} -->
<T.Mesh
	position = {[ bbox.position.x, bbox.position.y, bbox.position.z ]}
	rotation = {[ DEG2RAD * 0, DEG2RAD * 0, DEG2RAD * 0 ]}
>
	<T.BoxGeometry 
		args = {[ bbox_x, bbox_y, bbox_z ]}
	/>
	<T.MeshBasicMaterial 
		color = { $bbox_color_hex } 
		transparent = { true } 
		opacity = { $bbox_opacity } 
	/>
</T.Mesh>

<!-- Test Box -->
<!-- <T.Mesh>
	<T.BoxGeometry 
		args={[0.150, 0.150, 0.150]}
		position={[0.050, 0.050, 0.050]}
	/>
	<T.MeshBasicMaterial color={"orange"} transparent={false} opacity={0.8315} />
</T.Mesh> -->

<STL_MODEL_IMPORT
	position={[glb_model.position.x, glb_model.position.y, glb_model.position.z]}
	
>
	<T.AxesHelper args={model_axes} />
</STL_MODEL_IMPORT>
<!-- scale={0.001}
	position={[glb_model.position.x, glb_model.position.y, glb_model.position.z]}
	rotation={[glb_model.rotation.x, glb_model.rotation.y, glb_model.rotation.z]} -->