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
	// import GLB_XYZ_EQUIP_1_IMPORT from '$lib/(Threlte)/components/GLB_XYZ_EQUIP_1_IMPORT.svelte';
	// import GLB_XYZ_EQUIP_2_IMPORT from '$lib/(Threlte)/components/GLB_XYZ_EQUIP_2_IMPORT.svelte';
	// import GLB_XYZ_EQUIP_3_IMPORT from '$lib/(Threlte)/components/GLB_XYZ_EQUIP_3_IMPORT.svelte';
	// import GLB_XYZ_EQUIP_4_IMPORT from '$lib/(Threlte)/components/GLB_XYZ_EQUIP_4_IMPORT.svelte';

	import {
		row_sets_xyz,
		column_sets_xyz,
		grid_sets_xyz,
		rows_xyz,
		columns_xyz,
        traverses_xyz,
		rotation_xyz_x,
		rotation_xyz_y,
		rotation_xyz_z,
		position_xyz_dx,
		position_xyz_dy,
		position_xyz_dz,
		spacing_xyz_x,
		spacing_xyz_y,
		spacing_xyz_z,
		set_spacing_xyz_x,
		set_spacing_xyz_y,
		set_spacing_xyz_z,
    } from '$lib/states/xyz_config_state';

	import {
		productionline_env_xyz_x,
		productionline_env_xyz_y,
		productionline_env_xyz_z,
		env_xyz_color_hex,
		env_xyz_transparency,
		env_xyz_opacity,
    } from '$lib/states/xyz_config_state';

	import {
        boundingbox_x,
        boundingbox_y,
        boundingbox_z,
    } from '$lib/states/view_stl_model_state';

	import {
		equip_1_rows_xyz,
		equip_1_columns_xyz,
		equip_1_rotation_xyz_x,
		equip_1_rotation_xyz_y,
		equip_1_rotation_xyz_z,
		equip_1_position_xyz_dx,
		equip_1_position_xyz_dy,
		equip_1_position_xyz_dz,
		equip_1_spacing_xyz_x,
		equip_1_spacing_xyz_y,
		equip_1_spacing_xyz_z,
    } from '$lib/states/xyz_config_state';

	import {
		equip_2_rows_xyz,
		equip_2_columns_xyz,
		equip_2_rotation_xyz_x,
		equip_2_rotation_xyz_y,
		equip_2_rotation_xyz_z,
		equip_2_position_xyz_dx,
		equip_2_position_xyz_dy,
		equip_2_position_xyz_dz,
		equip_2_spacing_xyz_x,
		equip_2_spacing_xyz_y,
		equip_2_spacing_xyz_z,
    } from '$lib/states/xyz_config_state';

	import {
		equip_3_rows_xyz,
		equip_3_columns_xyz,
		equip_3_rotation_xyz_x,
		equip_3_rotation_xyz_y,
		equip_3_rotation_xyz_z,
		equip_3_position_xyz_dx,
		equip_3_position_xyz_dy,
		equip_3_position_xyz_dz,
		equip_3_spacing_xyz_x,
		equip_3_spacing_xyz_y,
		equip_3_spacing_xyz_z,
    } from '$lib/states/xyz_config_state';

	import {
		equip_4_rows_xyz,
		equip_4_columns_xyz,
		equip_4_rotation_xyz_x,
		equip_4_rotation_xyz_y,
		equip_4_rotation_xyz_z,
		equip_4_position_xyz_dx,
		equip_4_position_xyz_dy,
		equip_4_position_xyz_dz,
		equip_4_spacing_xyz_x,
		equip_4_spacing_xyz_y,
		equip_4_spacing_xyz_z,
    } from '$lib/states/xyz_config_state';

	import { onDestroy } from 'svelte';

	// // To be configured for input from state/store
	const extension = "stl"; // Process "stl" file format or else "glb"
	// const extension = "glb";

	// // Bounding Box dimensions
	$: bbox_x = $boundingbox_x
    $: bbox_y = $boundingbox_y
    $: bbox_z = $boundingbox_z

	// // Production Line Envelop dimensions [m]
	$: pl_env_x = $productionline_env_xyz_x
	$: pl_env_y = $productionline_env_xyz_y
	$: pl_env_z = $productionline_env_xyz_z
	$: xyz_env_color_hex = $env_xyz_color_hex
	$: xyz_env_transparency = $env_xyz_transparency
	$: xyz_env_opacity = $env_xyz_opacity

	// // Object configuration
	$: xyz_row_sets = $row_sets_xyz;
	$: xyz_column_sets = $column_sets_xyz;
	$: xyz_grid_sets = $grid_sets_xyz;

	$: xyz_rows = $rows_xyz;
	$: xyz_columns = $columns_xyz;
    $: xyz_traverses = $traverses_xyz;

	$: rot_x = $rotation_xyz_x;
	$: rot_y = $rotation_xyz_y;
	$: rot_z = $rotation_xyz_z;

	$: position_offset_x = $position_xyz_dx / 1000;
	$: position_offset_y = $position_xyz_dy / 1000;
	$: position_offset_z = $position_xyz_dz / 1000;

	$: xyz_spacing_x = $spacing_xyz_x / 1000;
	$: xyz_spacing_y = $spacing_xyz_y / 1000;
	$: xyz_spacing_z = $spacing_xyz_z / 1000;

	$: xyz_set_spacing_x = $set_spacing_xyz_x / 1000;
	$: xyz_set_spacing_y = $set_spacing_xyz_y / 1000;
	$: xyz_set_spacing_z = $set_spacing_xyz_z / 1000;

	// // Equipment
	// // Equipment 1 Traverse
	$: equip_1_xyz_rows = $equip_1_rows_xyz;
	$: equip_1_xyz_columns = $equip_1_columns_xyz

	$: equip_1_rot_x = $equip_1_rotation_xyz_x;
	$: equip_1_rot_y = $equip_1_rotation_xyz_y;
	$: equip_1_rot_z = $equip_1_rotation_xyz_z;

	$: equip_1_position_offset_x = $equip_1_position_xyz_dx / 1000;
	$: equip_1_position_offset_y = $equip_1_position_xyz_dy / 1000;
	$: equip_1_position_offset_z = $equip_1_position_xyz_dz / 1000;

	$: equip_1_xyz_spacing_x = $equip_1_spacing_xyz_x / 1000;
	$: equip_1_xyz_spacing_y = $equip_1_spacing_xyz_y / 1000;
	$: equip_1_xyz_spacing_z = $equip_1_spacing_xyz_z / 1000;

	// // Equipment 2
	$: equip_2_xyz_rows = $equip_2_rows_xyz;
	$: equip_2_xyz_columns = $equip_2_columns_xyz

	$: equip_2_rot_x = $equip_2_rotation_xyz_x;
	$: equip_2_rot_y = $equip_2_rotation_xyz_y;
	$: equip_2_rot_z = $equip_2_rotation_xyz_z;

	$: equip_2_position_offset_x = $equip_2_position_xyz_dx / 1000;
	$: equip_2_position_offset_y = $equip_2_position_xyz_dy / 1000;
	$: equip_2_position_offset_z = $equip_2_position_xyz_dz / 1000;

	$: equip_2_xyz_spacing_x = $equip_2_spacing_xyz_x / 1000;
	$: equip_2_xyz_spacing_y = $equip_2_spacing_xyz_y / 1000;
	$: equip_2_xyz_spacing_z = $equip_2_spacing_xyz_z / 1000;

	// // Equipment 3
	$: equip_3_xyz_rows = $equip_3_rows_xyz;
	$: equip_3_xyz_columns = $equip_3_columns_xyz

	$: equip_3_rot_x = $equip_3_rotation_xyz_x;
	$: equip_3_rot_y = $equip_3_rotation_xyz_y;
	$: equip_3_rot_z = $equip_3_rotation_xyz_z;

	$: equip_3_position_offset_x = $equip_3_position_xyz_dx / 1000;
	$: equip_3_position_offset_y = $equip_3_position_xyz_dy / 1000;
	$: equip_3_position_offset_z = $equip_3_position_xyz_dz / 1000;

	$: equip_3_xyz_spacing_x = $equip_3_spacing_xyz_x / 1000;
	$: equip_3_xyz_spacing_y = $equip_3_spacing_xyz_y / 1000;
	$: equip_3_xyz_spacing_z = $equip_3_spacing_xyz_z / 1000;

	// // Equipment 4 Anode
	$: equip_4_xyz_rows = $equip_4_rows_xyz;
	$: equip_4_xyz_columns = $equip_4_columns_xyz

	$: equip_4_rot_x = $equip_4_rotation_xyz_x;
	$: equip_4_rot_y = $equip_4_rotation_xyz_y;
	$: equip_4_rot_z = $equip_4_rotation_xyz_z;

	$: equip_4_position_offset_x = $equip_4_position_xyz_dx / 1000;
	$: equip_4_position_offset_y = $equip_4_position_xyz_dy / 1000;
	$: equip_4_position_offset_z = $equip_4_position_xyz_dz / 1000;

	$: equip_4_xyz_spacing_x = $equip_4_spacing_xyz_x / 1000;
	$: equip_4_xyz_spacing_y = $equip_4_spacing_xyz_y / 1000;
	$: equip_4_xyz_spacing_z = $equip_4_spacing_xyz_z / 1000;


	let positions_xyz: { xyz_x: number; xyz_y: number; xyz_z: number }[] = [];
	let rows = $rows_xyz;
	let columns = $columns_xyz;
	for (let xx = 0; xx < columns; xx += 1) {
		for (let yy = 0; yy < rows; yy += 1) {
			let xyz_x = xx + 0.0;
			let xyz_y = yy + 0.0;
			let xyz_z = 0.0;
			positions_xyz.push({ xyz_x, xyz_y, xyz_z });
		}
	};

	// // Traverse
	let equip_1_positions_xyz: { e_1_xyz_x: number, e_1_xyz_y: number, e_1_xyz_z: number }[] = [];
	let equip_1_rows = $equip_1_rows_xyz;
	let equip_1_columns = $equip_1_columns_xyz;
	for (let e_1_xx = 0; e_1_xx < equip_1_columns; e_1_xx += 1) {
		for (let e_1_yy = 0; e_1_yy < equip_1_rows; e_1_yy += 1) {
			let e_1_xyz_x = e_1_xx + 0.0;
			let e_1_xyz_y = e_1_yy + 0.0;
			let e_1_xyz_z = 0.0;
			equip_1_positions_xyz.push({e_1_xyz_x, e_1_xyz_y, e_1_xyz_z});
		}
	};

	// // Equipment 2
	let equip_2_positions_xyz: { e_2_xyz_x: number, e_2_xyz_y: number, e_2_xyz_z: number }[] = [];
	let equip_2_rows = $equip_2_rows_xyz;
	let equip_2_columns = $equip_2_columns_xyz;
	for (let e_2_xx = 0; e_2_xx < equip_2_columns; e_2_xx += 1) {
		for (let e_2_yy = 0; e_2_yy < equip_2_rows; e_2_yy += 1) {
			let e_2_xyz_x = e_2_xx + 0.0;
			let e_2_xyz_y = e_2_yy + 0.0;
			let e_2_xyz_z = 0.0;
			equip_2_positions_xyz.push({e_2_xyz_x, e_2_xyz_y, e_2_xyz_z});
		}
	};

	// // Equipment 3
	let equip_3_positions_xyz: { e_3_xyz_x: number, e_3_xyz_y: number, e_3_xyz_z: number }[] = [];
	let equip_3_rows = $equip_3_rows_xyz;
	let equip_3_columns = $equip_3_columns_xyz;
	for (let e_3_xx = 0; e_3_xx < equip_3_columns; e_3_xx += 1) {
		for (let e_3_yy = 0; e_3_yy < equip_3_rows; e_3_yy += 1) {
			let e_3_xyz_x = e_3_xx + 0.0;
			let e_3_xyz_y = e_3_yy + 0.0;
			let e_3_xyz_z = 0.0;
			equip_3_positions_xyz.push({e_3_xyz_x, e_3_xyz_y, e_3_xyz_z});
		}
	};

	// // Anode
	let equip_4_positions_xyz: { e_4_xyz_x: number, e_4_xyz_y: number, e_4_xyz_z: number }[] = [];
	let equip_4_rows = $equip_4_rows_xyz;
	let equip_4_columns = $equip_4_columns_xyz;
	for (let e_4_xx = 0; e_4_xx < equip_4_columns; e_4_xx += 1) {
		for (let e_4_yy = 0; e_4_yy < equip_4_rows; e_4_yy += 1) {
			let e_4_xyz_x = e_4_xx + 0.0;
			let e_4_xyz_y = e_4_yy + 0.0;
			let e_4_xyz_z = 0.0;
			equip_4_positions_xyz.push({e_4_xyz_x, e_4_xyz_y, e_4_xyz_z});
		}
	};
</script>

<!-- Production Line Envelop -->
<T.Mesh>
	<T.BoxGeometry args={[pl_env_x, pl_env_y, pl_env_z]} position={[0, 0, 0]} />
	<T.MeshBasicMaterial color={xyz_env_color_hex} transparent={xyz_env_transparency} opacity={xyz_env_opacity} />
</T.Mesh>

<!-- EQUIPMENT_1 Traverse -->
<!-- USE T.InstancedMesh with {#each}-loops instead of {#if} and control by rows_xyz, columns, positions, etc. -->
<T.InstancedMesh>
	{#each { length: equip_1_xyz_rows } as _, row}
		{#each { length: equip_1_xyz_columns } as _, col}
			<!-- <GLB_XYZ_EQUIP_1_IMPORT
				position={[
					-(pl_env_x - 0.650) / 2 + (0.650 + equip_1_xyz_spacing_x) * col + equip_1_position_offset_x,
					+(pl_env_y - 1.100) / 2 - (1.100 + equip_1_xyz_spacing_y) * row + equip_1_position_offset_y,
					0.0 + equip_1_position_offset_z
				]}
				rotation={[DEG2RAD * equip_1_rot_x, DEG2RAD * equip_1_rot_y, DEG2RAD * equip_1_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_2 -->
<T.InstancedMesh>
	{#each { length: equip_2_xyz_rows } as _, row}
		{#each { length: equip_2_xyz_columns } as _, col}
			<!-- <GLB_XYZ_EQUIP_2_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_2_xyz_spacing_x * col + equip_2_position_offset_x,
					+(pl_env_y) / 2 - equip_2_xyz_spacing_y * row + equip_2_position_offset_y,
					0.0 + equip_2_position_offset_z
				]}
				rotation={[DEG2RAD * equip_2_rot_x, DEG2RAD * equip_2_rot_y, DEG2RAD * equip_2_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_3 -->
<T.InstancedMesh>
	{#each { length: equip_3_xyz_rows } as _, row}
		{#each { length: equip_3_xyz_columns } as _, col}
			<!-- <GLB_XYZ_EQUIP_3_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_3_xyz_spacing_x * col + equip_3_position_offset_x,
					+(pl_env_y) / 2 - equip_3_xyz_spacing_y * row + equip_3_position_offset_y,
					0.0 + equip_3_position_offset_z
				]}
				rotation={[DEG2RAD * equip_3_rot_x, DEG2RAD * equip_3_rot_y, DEG2RAD * equip_3_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>

<!-- EQUIPMENT_4 Anode -->
<T.InstancedMesh>
	{#each { length: equip_4_xyz_rows } as _, row}
		{#each { length: equip_4_xyz_columns } as _, col}
			<!-- <GLB_XYZ_EQUIP_4_IMPORT
				position={[
					-(pl_env_x) / 2 + equip_4_xyz_spacing_x * col + equip_4_position_offset_x,
					+(pl_env_y) / 2 - equip_4_xyz_spacing_y * row + equip_4_position_offset_y,
					0.0 + equip_3_position_offset_z
				]}
				rotation={[DEG2RAD * equip_4_rot_x, DEG2RAD * equip_4_rot_y, DEG2RAD * equip_4_rot_z]}
			/> -->
		{/each}
	{/each}
</T.InstancedMesh>


<!-- Object to be processed -->
<T.InstancedMesh>
	{#each { length: xyz_row_sets } as _, xyz_row_set}
		{#each { length: xyz_column_sets } as _, xyz_column_set}
			{#each { length: xyz_grid_sets } as _, xyz_grid_set}
				{#each { length: xyz_rows } as _, row}
					{#each { length: xyz_columns } as _, col}
						{#each { length: xyz_traverses } as _, trav}
							{#if extension === "stl"}
								<STL_MODEL_IMPORT
									position={[
										-(pl_env_x - bbox_x) / 2 + ( (bbox_x + xyz_spacing_x) * col ) + position_offset_x + 
										(bbox_x * xyz_columns + xyz_spacing_x * (xyz_columns-1)) * xyz_column_set + xyz_set_spacing_x * xyz_column_set, 
										+(pl_env_y - bbox_y) / 2 - ( (bbox_y + xyz_spacing_y) * row ) + position_offset_y - 
										(bbox_y * xyz_rows + xyz_spacing_y * (xyz_rows-1)) * xyz_row_set - xyz_set_spacing_y * xyz_row_set, 
										// TODO: Update formula for multiple grids with grid spacing xyz_set_spacing_z
										+( bbox_z + xyz_spacing_z ) * (trav-(xyz_traverses-1)/2) + position_offset_z 
									]}
									rotation={[DEG2RAD * rot_x, DEG2RAD * rot_y, DEG2RAD * rot_z]}
								/>
							{:else}
								<!-- <GLB_MODEL_IMPORT
									position={[
										-(pl_env_x - bbox_x) / 2 + ( (bbox_x + xyz_spacing_x) * col ) + position_offset_x + 
										(bbox_x * xyz_columns + xyz_spacing_x * (xyz_columns-1)) * xyz_column_set + xyz_set_spacing_x * xyz_column_set, 
										+(pl_env_y - bbox_y) / 2 - ( (bbox_y + xyz_spacing_y) * row ) + position_offset_y - 
										(bbox_y * xyz_rows + xyz_spacing_y * (xyz_rows-1)) * xyz_row_set - xyz_set_spacing_y * xyz_row_set, 
										// TODO: Update formula for multiple grids with grid spacing xyz_set_spacing_z
										+( bbox_z + xyz_spacing_z ) * (trav-(xyz_traverses-1)/2) + position_offset_z 
									]}
									rotation={[DEG2RAD * rot_x, DEG2RAD * rot_y, DEG2RAD * rot_z]}
								/> -->
							{/if}
						{/each}
					{/each}
				{/each}
			{/each}
		{/each}
	{/each}
</T.InstancedMesh>