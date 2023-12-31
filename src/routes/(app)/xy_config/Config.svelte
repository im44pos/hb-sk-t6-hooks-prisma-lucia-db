<script>
	// import { Tab } from '@tweakpane/core/dist/cjs/blade/tab/model/tab';
	import { useTweakpane } from '$lib/utils/useTweakpane.ts';

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
		store: row_sets_xy,
		value: $row_sets_xy,
		params: { min: 0, max: 3, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Column Sets',
		store: column_sets_xy,
		value: $column_sets_xy,
		params: { min: 0, max: 3, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Rows',
		store: rows_xy,
		value: $rows_xy,
		params: { min: 0, max: 50, step: 1 },
		parent: productConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: columns_xy,
		value: $columns_xy,
		params: { min: 0, max: 100, step: 1 },
		parent: productConfigurationFolder,
	});

	const productRotationFolder = xyConfigTab.pages[0].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: rotation_xy_x,
		value: $rotation_xy_x,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: rotation_xy_y,
		value: $rotation_xy_y,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: rotation_xy_z,
		value: $rotation_xy_z,
		params: { min: -180, max: 180, step: 1 },
		parent: productRotationFolder,
	});

	const productPositionFolder = xyConfigTab.pages[0].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: position_xy_dx,
		value: $position_xy_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	addInput({
		label: 'dY position',
		store: position_xy_dy,
		value: $position_xy_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	addInput({
		label: 'dZ position',
		store: position_xy_dz,
		value: $position_xy_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: productPositionFolder
	});

	const productSpacingFolder = xyConfigTab.pages[0].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: spacing_xy_x,
		value: $spacing_xy_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: spacing_xy_y,
		value: $spacing_xy_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: spacing_xy_z,
		value: $spacing_xy_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: productSpacingFolder
	});

	const productionSetSpacingFolder = xyConfigTab.pages[0].addFolder({
		title: 'Set Spacing',
		expanded: false
	});

	addInput({
		label: 'X set_spacing',
		store: set_spacing_xy_x,
		value: $set_spacing_xy_x,
		params: { min: -5000, max: 5000, step: 1 },
		parent: productionSetSpacingFolder
	});

	addInput({
		label: 'Y set_spacing',
		store: set_spacing_xy_y,
		value: $set_spacing_xy_y,
		params: { min: -1000, max: 1000, step: 1 },
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
	// 	store: equip_1_sets_xy,
	// 	value: $equip_1_sets_xy,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip1ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_1_rows_xy,
		value: $equip_1_rows_xy,
		params: { min: 0, max: 50, step: 1 },
		parent: equip1ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_1_columns_xy,
		value: $equip_1_columns_xy,
		params: { min: 0, max: 100, step: 1 },
		parent: equip1ConfigurationFolder,
	});

	const equip1RotationFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_1_rotation_xy_x,
		value: $equip_1_rotation_xy_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_1_rotation_xy_y,
		value: $equip_1_rotation_xy_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_1_rotation_xy_z,
		value: $equip_1_rotation_xy_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip1RotationFolder,
	});

	const equip1PositionFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_1_position_xy_dx,
		value: $equip_1_position_xy_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_1_position_xy_dy,
		value: $equip_1_position_xy_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_1_position_xy_dz,
		value: $equip_1_position_xy_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip1PositionFolder
	});

	const equip1SpacingFolder = xyEquipmentConfigTab.pages[0].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_1_spacing_xy_x,
		value: $equip_1_spacing_xy_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_1_spacing_xy_y,
		value: $equip_1_spacing_xy_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_1_spacing_xy_z,
		value: $equip_1_spacing_xy_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip1SpacingFolder
	});

	const equip2ConfigurationFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_2_sets_xy,
	// 	value: $equip_2_sets_xy,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip2ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_2_rows_xy,
		value: $equip_2_rows_xy,
		params: { min: 0, max: 50, step: 1 },
		parent: equip2ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_2_columns_xy,
		value: $equip_2_columns_xy,
		params: { min: 0, max: 100, step: 1 },
		parent: equip2ConfigurationFolder,
	});

	const equip2RotationFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_2_rotation_xy_x,
		value: $equip_2_rotation_xy_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_2_rotation_xy_y,
		value: $equip_2_rotation_xy_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_2_rotation_xy_z,
		value: $equip_2_rotation_xy_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip2RotationFolder,
	});

	const equip2PositionFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_2_position_xy_dx,
		value: $equip_2_position_xy_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_2_position_xy_dy,
		value: $equip_2_position_xy_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_2_position_xy_dz,
		value: $equip_2_position_xy_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip2PositionFolder
	});

	const equip2SpacingFolder = xyEquipmentConfigTab.pages[1].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_2_spacing_xy_x,
		value: $equip_2_spacing_xy_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_2_spacing_xy_y,
		value: $equip_2_spacing_xy_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_2_spacing_xy_z,
		value: $equip_2_spacing_xy_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip2SpacingFolder
	});

	const equip3ConfigurationFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_3_sets_xy,
	// 	value: $equip_3_sets_xy,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip3ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_3_rows_xy,
		value: $equip_3_rows_xy,
		params: { min: 0, max: 50, step: 1 },
		parent: equip3ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_3_columns_xy,
		value: $equip_3_columns_xy,
		params: { min: 0, max: 100, step: 1 },
		parent: equip3ConfigurationFolder,
	});

	const equip3RotationFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_3_rotation_xy_x,
		value: $equip_3_rotation_xy_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_3_rotation_xy_y,
		value: $equip_3_rotation_xy_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_3_rotation_xy_z,
		value: $equip_3_rotation_xy_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip3RotationFolder,
	});

	const equip3PositionFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_3_position_xy_dx,
		value: $equip_3_position_xy_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_3_position_xy_dy,
		value: $equip_3_position_xy_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_3_position_xy_dz,
		value: $equip_3_position_xy_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip3PositionFolder
	});

	const equip3SpacingFolder = xyEquipmentConfigTab.pages[2].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_3_spacing_xy_x,
		value: $equip_3_spacing_xy_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_3_spacing_xy_y,
		value: $equip_3_spacing_xy_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_3_spacing_xy_z,
		value: $equip_3_spacing_xy_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip3SpacingFolder
	});

	const equip4ConfigurationFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'XY Configuration',
		expanded: false
	});

	// addInput({
	// 	label: 'XY Sets',
	// 	store: equip_4_sets_xy,
	// 	value: $equip_4_sets_xy,
	// 	params: { min: 0, max: 3, step: 1 },
	// 	parent: equip4ConfigurationFolder,
	// });

	addInput({
		label: 'XY Rows',
		store: equip_4_rows_xy,
		value: $equip_4_rows_xy,
		params: { min: 0, max: 50, step: 1 },
		parent: equip4ConfigurationFolder,
	});

	addInput({
		label: 'XY Columns',
		store: equip_4_columns_xy,
		value: $equip_4_columns_xy,
		params: { min: 0, max: 100, step: 1 },
		parent: equip4ConfigurationFolder,
	});

	const equip4RotationFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Object Rotation',
		expanded: false
	});

	addInput({
		label: 'X rotation',
		store: equip_4_rotation_xy_x,
		value: $equip_4_rotation_xy_x,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	addInput({
		label: 'Y rotation',
		store: equip_4_rotation_xy_y,
		value: $equip_4_rotation_xy_y,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	addInput({
		label: 'Z rotation',
		store: equip_4_rotation_xy_z,
		value: $equip_4_rotation_xy_z,
		params: { min: -180, max: 180, step: 1 },
		parent: equip4RotationFolder,
	});

	const equip4PositionFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Position',
		expanded: false
	});

	addInput({
		label: 'dX position',
		store: equip_4_position_xy_dx,
		value: $equip_4_position_xy_dx,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	addInput({
		label: 'dY position',
		store: equip_4_position_xy_dy,
		value: $equip_4_position_xy_dy,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	addInput({
		label: 'dZ position',
		store: equip_4_position_xy_dz,
		value: $equip_4_position_xy_dz,
		params: { min: -1000, max: 1000, step: 1 },
		parent: equip4PositionFolder
	});

	const equip4SpacingFolder = xyEquipmentConfigTab.pages[3].addFolder({
		title: 'Spacing',
		expanded: false
	});

	addInput({
		label: 'X spacing',
		store: equip_4_spacing_xy_x,
		value: $equip_4_spacing_xy_x,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});

	addInput({
		label: 'Y spacing',
		store: equip_4_spacing_xy_y,
		value: $equip_4_spacing_xy_y,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});

	addInput({
		label: 'Z spacing',
		store: equip_4_spacing_xy_z,
		value: $equip_4_spacing_xy_z,
		params: { min: -10000, max: 10000, step: 1 },
		parent: equip4SpacingFolder
	});


	const productionLineFolder = xyConfigTab.pages[2].addFolder({
		title: 'Working Envelop',
		expanded: false
	});

	addInput({
		label: 'Length [m]',
		store: productionline_env_xy_x,
		value: $productionline_env_xy_x,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	addInput({
		label: 'Height/Depth [m]',
		store: productionline_env_xy_y,
		value: $productionline_env_xy_y,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	addInput({
		label: 'Width [m]',
		store: productionline_env_xy_z,
		value: $productionline_env_xy_z,
		// params: { min: 0, max: 20, step: 1 },
		parent: productionLineFolder,
	});

	const xyEnvelopColorFolder = xyConfigTab.pages[2].addFolder({
		title: 'Color configuration',
		expanded: false
	});

	addInput({
		label: 'Color',
		store: env_xy_color_hex,
		value: $env_xy_color_hex,
		params: {
			picker: 'inline',
			expanded: true
		},
		parent: xyEnvelopColorFolder,
	});

	// // Commented out because lack of functionality
	// addInput({
	// 	label: 'Transparency',
	// 	store: env_xy_transparency,
	// 	value: $env_xy_transparency,
	// 	// params: {true, false},
	// 	parent: xyEnvelopColorFolder,
	// });

	addInput({
		label: 'Opacity',
		store: env_xy_opacity,
		value: $env_xy_opacity,
		params: { min: 0.0, max: 1.0, step: 0.005 },
		parent: xyEnvelopColorFolder,
	});
</script>

<div use:action />
