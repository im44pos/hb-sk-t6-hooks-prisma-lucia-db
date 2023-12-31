<script lang="ts">
	import {
		MeshBasicMaterial,
		// MeshLambertMaterial,
		// MeshPhongMaterial,
		// MeshStandardMaterial,
		// MeshPhysicalMaterial
	} from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils';

	import { T } from '@threlte/core';
	import { Instance, InstancedMesh, GLTF } from '@threlte/extras';

	// import GLB_MODEL_IMPORT from '$lib/(Threlte)/components/GLB_MODEL_IMPORT.svelte';
	import STL_MODEL_IMPORT from '$lib/(Threlte)/components/STL_MODEL_IMPORT.svelte';
	// import GLB_XY_EQUIP_1_IMPORT from '$lib/(Threlte)/components/GLB_XY_EQUIP_1_IMPORT.svelte';
	// import GLB_XY_EQUIP_2_IMPORT from '$lib/(Threlte)/components/GLB_XY_EQUIP_2_IMPORT.svelte';
	// import GLB_XY_EQUIP_3_IMPORT from '$lib/(Threlte)/components/GLB_XY_EQUIP_3_IMPORT.svelte';
	// import GLB_XY_EQUIP_4_IMPORT from '$lib/(Threlte)/components/GLB_XY_EQUIP_4_IMPORT.svelte';

	import {
		row_sets_xy,
		column_sets_xy,
		rows_xy,
		columns_xy,
		rotation_xy_x,
		rotation_xy_y,
		rotation_xy_z,
		position_xy_dx,
		position_xy_dy,
		position_xy_dz,
		spacing_xy_x,
		spacing_xy_y,
		spacing_xy_z,
		set_spacing_xy_x,
		set_spacing_xy_y,
    } from '$lib/states/xy_config_state';

	import {
		productionline_env_xy_x,
		productionline_env_xy_y,
		productionline_env_xy_z,
		env_xy_color_hex,
		env_xy_transparency,
		env_xy_opacity,
    } from '$lib/states/xy_config_state';

	import {
        boundingbox_x,
        boundingbox_y,
        boundingbox_z,
    } from '$lib/states/view_stl_model_state';

	import {
		equip_1_rows_xy,
		equip_1_columns_xy,
		equip_1_rotation_xy_x,
		equip_1_rotation_xy_y,
		equip_1_rotation_xy_z,
		equip_1_position_xy_dx,
		equip_1_position_xy_dy,
		equip_1_position_xy_dz,
		equip_1_spacing_xy_x,
		equip_1_spacing_xy_y,
		equip_1_spacing_xy_z,
    } from '$lib/states/xy_config_state';

	import {
		equip_2_rows_xy,
		equip_2_columns_xy,
		equip_2_rotation_xy_x,
		equip_2_rotation_xy_y,
		equip_2_rotation_xy_z,
		equip_2_position_xy_dx,
		equip_2_position_xy_dy,
		equip_2_position_xy_dz,
		equip_2_spacing_xy_x,
		equip_2_spacing_xy_y,
		equip_2_spacing_xy_z,
    } from '$lib/states/xy_config_state';

	import {
		equip_3_rows_xy,
		equip_3_columns_xy,
		equip_3_rotation_xy_x,
		equip_3_rotation_xy_y,
		equip_3_rotation_xy_z,
		equip_3_position_xy_dx,
		equip_3_position_xy_dy,
		equip_3_position_xy_dz,
		equip_3_spacing_xy_x,
		equip_3_spacing_xy_y,
		equip_3_spacing_xy_z,
    } from '$lib/states/xy_config_state';

	import {
		equip_4_rows_xy,
		equip_4_columns_xy,
		equip_4_rotation_xy_x,
		equip_4_rotation_xy_y,
		equip_4_rotation_xy_z,
		equip_4_position_xy_dx,
		equip_4_position_xy_dy,
		equip_4_position_xy_dz,
		equip_4_spacing_xy_x,
		equip_4_spacing_xy_y,
		equip_4_spacing_xy_z,
    } from '$lib/states/xy_config_state';

	import { onDestroy } from 'svelte';

	// // Bounding Box dimensions
	$: bbox_x = $boundingbox_x
    $: bbox_y = $boundingbox_y
    $: bbox_z = $boundingbox_z
	// // Plate Ax
	// let bbox_x = 0.210
    // let bbox_y = 0.297
    // let bbox_z = 0.003

	// // Impeller
	// let bbox_x = 0.080
    // let bbox_y = 0.080
    // let bbox_z = 0.018

	// Production Line Envelop dimensions [m]
	$: pl_env_x = $productionline_env_xy_x
	$: pl_env_y = $productionline_env_xy_y
	$: pl_env_z = $productionline_env_xy_z
	$: xy_env_color_hex = $env_xy_color_hex
	$: xy_env_transparency = $env_xy_transparency
	$: xy_env_opacity = $env_xy_opacity

	// // Object configuration
	$: xy_row_sets = $row_sets_xy;
	$: xy_column_sets = $column_sets_xy;

	$: xy_rows = $rows_xy;
	$: xy_columns = $columns_xy;

	$: rot_x = $rotation_xy_x;
	$: rot_y = $rotation_xy_y;
	$: rot_z = $rotation_xy_z;

	$: position_offset_x = $position_xy_dx / 1000;
	$: position_offset_y = $position_xy_dy / 1000;
	$: position_offset_z = $position_xy_dz / 1000;

	$: xy_spacing_x = $spacing_xy_x / 1000;
	$: xy_spacing_y = $spacing_xy_y / 1000;
	$: xy_spacing_z = $spacing_xy_z / 1000;

	$: xy_set_spacing_x = $set_spacing_xy_x / 1000;
	$: xy_set_spacing_y = $set_spacing_xy_y / 1000;

	// // Equipment
	// // Equipment 1 Traverse
	$: equip_1_xy_rows = $equip_1_rows_xy;
	$: equip_1_xy_columns = $equip_1_columns_xy

	$: equip_1_rot_x = $equip_1_rotation_xy_x;
	$: equip_1_rot_y = $equip_1_rotation_xy_y;
	$: equip_1_rot_z = $equip_1_rotation_xy_z;

	$: equip_1_position_offset_x = $equip_1_position_xy_dx / 1000;
	$: equip_1_position_offset_y = $equip_1_position_xy_dy / 1000;
	$: equip_1_position_offset_z = $equip_1_position_xy_dz / 1000;

	$: equip_1_xy_spacing_x = $equip_1_spacing_xy_x / 1000;
	$: equip_1_xy_spacing_y = $equip_1_spacing_xy_y / 1000;
	$: equip_1_xy_spacing_z = $equip_1_spacing_xy_z / 1000;

	// // Equipment 2
	$: equip_2_xy_rows = $equip_2_rows_xy;
	$: equip_2_xy_columns = $equip_2_columns_xy

	$: equip_2_rot_x = $equip_2_rotation_xy_x;
	$: equip_2_rot_y = $equip_2_rotation_xy_y;
	$: equip_2_rot_z = $equip_2_rotation_xy_z;

	$: equip_2_position_offset_x = $equip_2_position_xy_dx / 1000;
	$: equip_2_position_offset_y = $equip_2_position_xy_dy / 1000;
	$: equip_2_position_offset_z = $equip_2_position_xy_dz / 1000;

	$: equip_2_xy_spacing_x = $equip_2_spacing_xy_x / 1000;
	$: equip_2_xy_spacing_y = $equip_2_spacing_xy_y / 1000;
	$: equip_2_xy_spacing_z = $equip_2_spacing_xy_z / 1000;

	// // Equipment 3
	$: equip_3_xy_rows = $equip_3_rows_xy;
	$: equip_3_xy_columns = $equip_3_columns_xy

	$: equip_3_rot_x = $equip_3_rotation_xy_x;
	$: equip_3_rot_y = $equip_3_rotation_xy_y;
	$: equip_3_rot_z = $equip_3_rotation_xy_z;

	$: equip_3_position_offset_x = $equip_3_position_xy_dx / 1000;
	$: equip_3_position_offset_y = $equip_3_position_xy_dy / 1000;
	$: equip_3_position_offset_z = $equip_3_position_xy_dz / 1000;

	$: equip_3_xy_spacing_x = $equip_3_spacing_xy_x / 1000;
	$: equip_3_xy_spacing_y = $equip_3_spacing_xy_y / 1000;
	$: equip_3_xy_spacing_z = $equip_3_spacing_xy_z / 1000;

	// // Equipment 4 Anode
	$: equip_4_xy_rows = $equip_4_rows_xy;
	$: equip_4_xy_columns = $equip_4_columns_xy

	$: equip_4_rot_x = $equip_4_rotation_xy_x;
	$: equip_4_rot_y = $equip_4_rotation_xy_y;
	$: equip_4_rot_z = $equip_4_rotation_xy_z;

	$: equip_4_position_offset_x = $equip_4_position_xy_dx / 1000;
	$: equip_4_position_offset_y = $equip_4_position_xy_dy / 1000;
	$: equip_4_position_offset_z = $equip_4_position_xy_dz / 1000;

	$: equip_4_xy_spacing_x = $equip_4_spacing_xy_x / 1000;
	$: equip_4_xy_spacing_y = $equip_4_spacing_xy_y / 1000;
	$: equip_4_xy_spacing_z = $equip_4_spacing_xy_z / 1000;


	let positions_xy: { xy_x: number; xy_y: number; xy_z: number }[] = [];
	let rows = $rows_xy;
	let columns = $columns_xy;
	for (let xx = 0; xx < columns; xx += 1) {
		for (let yy = 0; yy < rows; yy += 1) {
			let xy_x = xx + 0.0;
			let xy_y = yy + 0.0;
			let xy_z = 0.0;
			positions_xy.push({ xy_x, xy_y, xy_z });
		}
	};

	// // Traverse
	let equip_1_positions_xy: { e_1_xy_x: number, e_1_xy_y: number, e_1_xy_z: number }[] = [];
	let equip_1_rows = $equip_1_rows_xy;
	let equip_1_columns = $equip_1_columns_xy;
	for (let e_1_xx = 0; e_1_xx < equip_1_columns; e_1_xx += 1) {
		for (let e_1_yy = 0; e_1_yy < equip_1_rows; e_1_yy += 1) {
			let e_1_xy_x = e_1_xx + 0.0;
			let e_1_xy_y = e_1_yy + 0.0;
			let e_1_xy_z = 0.0;
			equip_1_positions_xy.push({e_1_xy_x, e_1_xy_y, e_1_xy_z});
		}
	};

	// // Equipment 2
	let equip_2_positions_xy: { e_2_xy_x: number, e_2_xy_y: number, e_2_xy_z: number }[] = [];
	let equip_2_rows = $equip_2_rows_xy;
	let equip_2_columns = $equip_2_columns_xy;
	for (let e_2_xx = 0; e_2_xx < equip_2_columns; e_2_xx += 1) {
		for (let e_2_yy = 0; e_2_yy < equip_2_rows; e_2_yy += 1) {
			let e_2_xy_x = e_2_xx + 0.0;
			let e_2_xy_y = e_2_yy + 0.0;
			let e_2_xy_z = 0.0;
			equip_2_positions_xy.push({e_2_xy_x, e_2_xy_y, e_2_xy_z});
		}
	};

	// // Equipment 3
	let equip_3_positions_xy: { e_3_xy_x: number, e_3_xy_y: number, e_3_xy_z: number }[] = [];
	let equip_3_rows = $equip_3_rows_xy;
	let equip_3_columns = $equip_3_columns_xy;
	for (let e_3_xx = 0; e_3_xx < equip_3_columns; e_3_xx += 1) {
		for (let e_3_yy = 0; e_3_yy < equip_3_rows; e_3_yy += 1) {
			let e_3_xy_x = e_3_xx + 0.0;
			let e_3_xy_y = e_3_yy + 0.0;
			let e_3_xy_z = 0.0;
			equip_3_positions_xy.push({e_3_xy_x, e_3_xy_y, e_3_xy_z});
		}
	};

	// // Anode
	let equip_4_positions_xy: { e_4_xy_x: number, e_4_xy_y: number, e_4_xy_z: number }[] = [];
	let equip_4_rows = $equip_4_rows_xy;
	let equip_4_columns = $equip_4_columns_xy;
	for (let e_4_xx = 0; e_4_xx < equip_4_columns; e_4_xx += 1) {
		for (let e_4_yy = 0; e_4_yy < equip_4_rows; e_4_yy += 1) {
			let e_4_xy_x = e_4_xx + 0.0;
			let e_4_xy_y = e_4_yy + 0.0;
			let e_4_xy_z = 0.0;
			equip_4_positions_xy.push({e_4_xy_x, e_4_xy_y, e_4_xy_z});
		}
	};
</script>

<!-- Production Line Envelop -->
<T.Mesh>
	<T.BoxGeometry args={[pl_env_x, pl_env_y, pl_env_z]} position={[0, 0, 0]} />
	<T.MeshBasicMaterial color={xy_env_color_hex} transparent={xy_env_transparency} opacity={xy_env_opacity} />
</T.Mesh>

<!-- EQUIPMENT_1 Traverse -->
<!-- USE T.InstancedMesh with {#each}-loops instead of {#if} and control by rows_xy, columns, positions, etc. -->
<T.InstancedMesh>
	{#each { length: equip_1_xy_rows } as _, row}
		{#each { length: equip_1_xy_columns } as _, col}
			<!-- <GLB_XY_EQUIP_1_IMPORT
				position={[
					-(pl_env_x - 0.650) / 2 + (0.650 + equip_1_xy_spacing_x) * col + equip_1_position_offset_x,
					+(pl_env_y - 1.100) / 2 - (1.100 + equip_1_xy_spacing_y) * row + equip_1_position_offset_y,
					0.0 + equip_1_position_offset_z
				]}
				rotation={[DEG2RAD * equip_1_rot_x, DEG2RAD * equip_1_rot_y, DEG2RAD * equip_1_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_2 -->
<T.InstancedMesh>
	{#each { length: equip_2_xy_rows } as _, row}
		{#each { length: equip_2_xy_columns } as _, col}
			<!-- <GLB_XY_EQUIP_2_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_2_xy_spacing_x * col + equip_2_position_offset_x,
					+(pl_env_y) / 2 - equip_2_xy_spacing_y * row + equip_2_position_offset_y,
					0.0 + equip_2_position_offset_z
				]}
				rotation={[DEG2RAD * equip_2_rot_x, DEG2RAD * equip_2_rot_y, DEG2RAD * equip_2_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_3 -->
<T.InstancedMesh>
	{#each { length: equip_3_xy_rows } as _, row}
		{#each { length: equip_3_xy_columns } as _, col}
			<!-- <GLB_XY_EQUIP_3_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_3_xy_spacing_x * col + equip_3_position_offset_x,
					+(pl_env_y) / 2 - equip_3_xy_spacing_y * row + equip_3_position_offset_y,
					0.0 + equip_3_position_offset_z
				]}
				rotation={[DEG2RAD * equip_3_rot_x, DEG2RAD * equip_3_rot_y, DEG2RAD * equip_3_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_4 Anode -->
<T.InstancedMesh>
	{#each { length: equip_4_xy_rows } as _, row}
		{#each { length: equip_4_xy_columns } as _, col}
			<!-- <GLB_XY_EQUIP_4_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_4_xy_spacing_x * col + equip_4_position_offset_x,
					+(pl_env_y) / 2 - equip_4_xy_spacing_y * row + equip_4_position_offset_y,
					0.0 + equip_3_position_offset_z
				]}
				rotation={[DEG2RAD * equip_4_rot_x, DEG2RAD * equip_4_rot_y, DEG2RAD * equip_4_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>


<!-- Object to be processed -->
<T.InstancedMesh>
	{#each { length: xy_row_sets } as _, xy_row_set}
		{#each { length: xy_column_sets } as _, xy_column_set}
			{#each { length: xy_rows } as _, row}
				{#each { length: xy_columns } as _, col}
					<STL_MODEL_IMPORT
						position={[
							-(pl_env_x - bbox_x) / 2 + (bbox_x + xy_spacing_x) * col + position_offset_x + 
							(bbox_x * xy_columns + xy_spacing_x * (xy_columns-1)) * xy_column_set + xy_set_spacing_x * xy_column_set,
							+(pl_env_y - bbox_y) / 2 - (bbox_y + xy_spacing_y) * row + position_offset_y - 
							(bbox_y * xy_rows + xy_spacing_y * (xy_rows-1)) * xy_row_set - xy_set_spacing_y * xy_row_set,
							0.0 + position_offset_z
						]}
						rotation={[DEG2RAD * rot_x, DEG2RAD * rot_y, DEG2RAD * rot_z]}
					/>
				{/each}
			{/each}
		{/each}
	{/each}
</T.InstancedMesh>