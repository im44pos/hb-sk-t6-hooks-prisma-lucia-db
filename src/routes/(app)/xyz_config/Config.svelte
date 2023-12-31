<script>
	// import { Tab } from '@tweakpane/core/dist/cjs/blade/tab/model/tab';
	import { useTweakpane } from '$lib/utils/useTweakpane.ts';

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

	const { action, addTab, addFolder, addInput } = useTweakpane({
		title: 'XY Configuration',
		expanded: false
	});

	const xyConfigTab = addTab({
		pages: [
			{title: 'Product'},
			{title: 'Equipment'},
			{title: 'Production Line'},
		],
		// expanded: false // // Would be a welcome option: https://cocopon.github.io/tweakpane/api/interfaces/TabParams.html
	});

	const productConfigurationFolder = xyConfigTab.pages[0].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	addInput({
		label: 'XY Row Sets',
		store: row_sets_xyz,
		value: $row_sets_xyz,
		params: { min: 0, max: 3, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Column Sets',
		store: column_sets_xyz,
		value: $column_sets_xyz,
		params: { min: 0, max: 3, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Grid Sets',
		store: grid_sets_xyz,
		value: $grid_sets_xyz,
		params: { min: 0, max: 3, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Rows',
		store: rows_xyz,
		value: $rows_xyz,
		params: { min: 0, max: 50, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: columns_xyz,
		value: $columns_xyz,
		params: { min: 0, max: 100, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XYZ Traverses',
		store: traverses_xyz,
		value: $traverses_xyz,
		params: { min: 0, max: 20, step: 1 },
		parent: productConfigurationFolder,
	});

	const productRotationFolder = xyConfigTab.pages[0].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: rotation_xyz_x,
		value: $rotation_xyz_x,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: rotation_xyz_y,
		value: $rotation_xyz_y,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: rotation_xyz_z,
		value: $rotation_xyz_z,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	const productPositionFolder = xyConfigTab.pages[0].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: position_xyz_dx,
		value: $position_xyz_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	addInput({
		label: 'dY position',
		store: position_xyz_dy,
		value: $position_xyz_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	addInput({
		label: 'dZ position',
		store: position_xyz_dz,
		value: $position_xyz_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	const productSpacingFolder = xyConfigTab.pages[0].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: spacing_xyz_x,
		value: $spacing_xyz_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: spacing_xyz_y,
		value: $spacing_xyz_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: spacing_xyz_z,
		value: $spacing_xyz_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	const productionSetSpacingFolder = xyConfigTab.pages[0].addFolder({
		title: 'Set Spacing',
		expanded: false
	});

	addInput({
		label: 'X set_spacing',
		store: set_spacing_xyz_x,
		value: $set_spacing_xyz_x,
		params: { min: -5000, max: 5000, step: 1 },
		parent: productionSetSpacingFolder
	});

	addInput({
		label: 'Y set_spacing',
		store: set_spacing_xyz_y,
		value: $set_spacing_xyz_y,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productionSetSpacingFolder
	});

	addInput({
		label: 'Z set_spacing',
		store: set_spacing_xyz_z,
		value: $set_spacing_xyz_z,
		params: { min: -500, max: 500, step: 1 },
		parent: productionSetSpacingFolder
	});


	const xyEquipmentConfigTab = xyConfigTab.pages[1].addTab({
		pages: [
			{title: 'Traverse'}, // equip_1
			{title: 'Vertical'}, // equip_2
			{title: 'Horizontal'}, // equip_3
			{title: 'Anode'}, // equip_4
		],
		// expanded: false // // Would be a welcome option: https://cocopon.github.io/tweakpane/api/interfaces/TabParams.html
	});

	const equip1ConfigurationFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_1_sets_xyz,
	// 	value: $equip_1_sets_xyz,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip1ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_1_rows_xyz,
		value: $equip_1_rows_xyz,
		params: { min: 0, max: 50, step: 1 },
		parent: equip1ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_1_columns_xyz,
		value: $equip_1_columns_xyz,
		params: { min: 0, max: 100, step: 1 },
		parent: equip1ConfigurationFolder,
	});

	const equip1RotationFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_1_rotation_xyz_x,
		value: $equip_1_rotation_xyz_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_1_rotation_xyz_y,
		value: $equip_1_rotation_xyz_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_1_rotation_xyz_z,
		value: $equip_1_rotation_xyz_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	const equip1PositionFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_1_position_xyz_dx,
		value: $equip_1_position_xyz_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_1_position_xyz_dy,
		value: $equip_1_position_xyz_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_1_position_xyz_dz,
		value: $equip_1_position_xyz_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	const equip1SpacingFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_1_spacing_xyz_x,
		value: $equip_1_spacing_xyz_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_1_spacing_xyz_y,
		value: $equip_1_spacing_xyz_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_1_spacing_xyz_z,
		value: $equip_1_spacing_xyz_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	const equip2ConfigurationFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_2_sets_xyz,
	// 	value: $equip_2_sets_xyz,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip2ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_2_rows_xyz,
		value: $equip_2_rows_xyz,
		params: { min: 0, max: 50, step: 1 },
		parent: equip2ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_2_columns_xyz,
		value: $equip_2_columns_xyz,
		params: { min: 0, max: 100, step: 1 },
		parent: equip2ConfigurationFolder,
	});

	const equip2RotationFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_2_rotation_xyz_x,
		value: $equip_2_rotation_xyz_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_2_rotation_xyz_y,
		value: $equip_2_rotation_xyz_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_2_rotation_xyz_z,
		value: $equip_2_rotation_xyz_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	const equip2PositionFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_2_position_xyz_dx,
		value: $equip_2_position_xyz_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_2_position_xyz_dy,
		value: $equip_2_position_xyz_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_2_position_xyz_dz,
		value: $equip_2_position_xyz_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	const equip2SpacingFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_2_spacing_xyz_x,
		value: $equip_2_spacing_xyz_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_2_spacing_xyz_y,
		value: $equip_2_spacing_xyz_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_2_spacing_xyz_z,
		value: $equip_2_spacing_xyz_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	const equip3ConfigurationFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_3_sets_xyz,
	// 	value: $equip_3_sets_xyz,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip3ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_3_rows_xyz,
		value: $equip_3_rows_xyz,
		params: { min: 0, max: 50, step: 1 },
		parent: equip3ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_3_columns_xyz,
		value: $equip_3_columns_xyz,
		params: { min: 0, max: 100, step: 1 },
		parent: equip3ConfigurationFolder,
	});

	const equip3RotationFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_3_rotation_xyz_x,
		value: $equip_3_rotation_xyz_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_3_rotation_xyz_y,
		value: $equip_3_rotation_xyz_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_3_rotation_xyz_z,
		value: $equip_3_rotation_xyz_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	const equip3PositionFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_3_position_xyz_dx,
		value: $equip_3_position_xyz_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_3_position_xyz_dy,
		value: $equip_3_position_xyz_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_3_position_xyz_dz,
		value: $equip_3_position_xyz_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	const equip3SpacingFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_3_spacing_xyz_x,
		value: $equip_3_spacing_xyz_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_3_spacing_xyz_y,
		value: $equip_3_spacing_xyz_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_3_spacing_xyz_z,
		value: $equip_3_spacing_xyz_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	const equip4ConfigurationFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_4_sets_xyz,
	// 	value: $equip_4_sets_xyz,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip4ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_4_rows_xyz,
		value: $equip_4_rows_xyz,
		params: { min: 0, max: 50, step: 1 },
		parent: equip4ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_4_columns_xyz,
		value: $equip_4_columns_xyz,
		params: { min: 0, max: 100, step: 1 },
		parent: equip4ConfigurationFolder,
	});

	const equip4RotationFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_4_rotation_xyz_x,
		value: $equip_4_rotation_xyz_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_4_rotation_xyz_y,
		value: $equip_4_rotation_xyz_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_4_rotation_xyz_z,
		value: $equip_4_rotation_xyz_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	const equip4PositionFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_4_position_xyz_dx,
		value: $equip_4_position_xyz_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_4_position_xyz_dy,
		value: $equip_4_position_xyz_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_4_position_xyz_dz,
		value: $equip_4_position_xyz_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	const equip4SpacingFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_4_spacing_xyz_x,
		value: $equip_4_spacing_xyz_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_4_spacing_xyz_y,
		value: $equip_4_spacing_xyz_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_4_spacing_xyz_z,
		value: $equip_4_spacing_xyz_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});


	const productionLineFolder = xyConfigTab.pages[2].addFolder({
		title: 'Working Envelop',
		expanded: false
	});

	addInput({
		label: 'Length [m]',
		store: productionline_env_xyz_x,
		value: $productionline_env_xyz_x,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	addInput({
		label: 'Height/Depth [m]',
		store: productionline_env_xyz_y,
		value: $productionline_env_xyz_y,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	addInput({
		label: 'Width [m]',
		store: productionline_env_xyz_z,
		value: $productionline_env_xyz_z,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	const xyEnvelopColorFolder = xyConfigTab.pages[2].addFolder({
		title: 'Color configuration',
		expanded: false
	});

	addInput({
		label: 'Color',
		store: env_xyz_color_hex,
		value: $env_xyz_color_hex,
		params: {
			picker: 'inline',
			expanded: true
		},
		parent: xyEnvelopColorFolder,
	});

	// // Commented out because lack of functionality
	// addInput({
	// 	label: 'Transparency',
	// 	store: env_xyz_transparency,
	// 	value: $env_xyz_transparency,
	// 	// params: {true, false},
	// 	parent: xyEnvelopColorFolder,
	// });

	addInput({
		label: 'Opacity',
		store: env_xyz_opacity,
		value: $env_xyz_opacity,
		params: { min: 0.0, max: 1.0, step: 0.005 },
		parent: xyEnvelopColorFolder,
	});
</script>

<div use:action />
