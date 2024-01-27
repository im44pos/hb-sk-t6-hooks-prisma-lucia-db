<script lang="ts">
    import { 
        Color, 
        Folder,  
        Pane, 
        Slider,
        TabGroup, 
        TabPage, 
    } from 'svelte-tweakpane-ui';

    let expanded = false;
    // let expanded = true ? undefined: false; // // Werkt met bind:expanded (start is open)

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
</script>

<Pane title="Production Line: Electro 1" position='inline' width={370} >
    <Folder title="XYZ Configuration" bind:expanded>
        <TabGroup>
            <TabPage title="Product">
                <Folder title="XYZ Configuration" bind:expanded>
                    <Slider 
                        label="XYZ Row Sets"
                        min={0}
                        max={3}
                        bind:value={$row_sets_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XYZ Column Sets"
                        min={0}
                        max={3}
                        bind:value={$column_sets_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XYZ Grid Sets"
                        min={0}
                        max={3}
                        bind:value={$grid_sets_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XYZ Rows"
                        min={0}
                        max={50}
                        bind:value={$rows_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XYZ Columns"
                        min={0}
                        max={100}
                        bind:value={$columns_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XYZ Traverses"
                        min={0}
                        max={10}
                        bind:value={$traverses_xyz}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Object Rotation" bind:expanded>
                    <Slider 
                        label="X rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xyz_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xyz_y}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Z rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xyz_z}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Position" bind:expanded>
                    <Slider 
                        label="dX position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xyz_dx}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="dY position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xyz_dy}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="dZ position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xyz_dz}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Spacing" bind:expanded>
                    <Slider 
                        label="X spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xyz_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xyz_y}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Z spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xyz_z}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Set Spacing" bind:expanded>
                    <Slider 
                        label="X set spacing"
                        min={-5000}
                        max={+5000}
                        bind:value={$set_spacing_xyz_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y set spacing"
                        min={-1000}
                        max={+1000}
                        bind:value={$set_spacing_xyz_y}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Z set spacing"
                        min={-500}
                        max={+500}
                        bind:value={$set_spacing_xyz_z}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
            </TabPage>
            <TabPage  title="Equipment">
                <TabGroup>
                    <TabPage  title="Traverse">
                        <Folder title="XY Configuration" bind:expanded>
                            <Slider 
                                label="XY Rows"
                                min={0}
                                max={50}
                                bind:value={$equip_1_rows_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_1_columns_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xyz_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xyz_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xyz_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                    </TabPage>
                    <TabPage  title="Vertical">
                        <Folder title="XY Configuration" bind:expanded>
                            <Slider 
                                label="XY Rows"
                                min={0}
                                max={50}
                                bind:value={$equip_2_rows_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_2_columns_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xyz_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xyz_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xyz_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                    </TabPage>
                    <TabPage  title="Horizontal">
                        <Folder title="XY Configuration" bind:expanded>
                            <Slider 
                                label="XY Rows"
                                min={0}
                                max={50}
                                bind:value={$equip_3_rows_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_3_columns_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xyz_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xyz_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xyz_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                    </TabPage>
                    <TabPage  title="Anode">
                        <Folder title="XY Configuration" bind:expanded>
                            <Slider 
                                label="XY Rows"
                                min={0}
                                max={50}
                                bind:value={$equip_4_rows_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_4_columns_xyz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xyz_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xyz_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xyz_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xyz_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xyz_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xyz_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                    </TabPage>
                </TabGroup>    
            </TabPage>
            <TabPage  title="Production">
                <Folder title="Working Envelop" bind:expanded>
                    <Slider 
                        label="Length [m]"
                        min={0.000}
                        max={10.000}
                        bind:value={$productionline_env_xyz_x}
                        format={(v) => v.toFixed(3)}
                    />
                    <Slider 
                        label="Height/Dept [m]"
                        min={0.000}
                        max={4.000}
                        bind:value={$productionline_env_xyz_y}
                        format={(v) => v.toFixed(3)}
                    />
                    <Slider 
                        label="Width [m]"
                        min={0.000}
                        max={2.000}
                        bind:value={$productionline_env_xyz_z}
                        format={(v) => v.toFixed(3)}
                    />
                </Folder>
                <Folder title="Color Configuration" bind:expanded>
                    <Slider 
                        label="Opacity"
                        min={0.000}
                        max={1.000}
                        bind:value={$env_xyz_opacity}
                        format={(v) => v.toFixed(3)}
                    />
                    <Color 
                        label="Boundig Box Color" 
                        bind:value={$env_xyz_color_hex} 
                        picker='popup' 
                    />
                </Folder>
            </TabPage>
        </TabGroup>
    </Folder>
</Pane>
