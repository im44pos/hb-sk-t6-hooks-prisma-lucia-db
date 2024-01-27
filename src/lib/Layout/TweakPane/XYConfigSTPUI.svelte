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
</script>

<Pane title="Production Line: Powder Coat 1" position='inline' width={370} >
    <Folder title="XY Configuration" bind:expanded>
        <TabGroup>
            <TabPage title="Product">
                <Folder title="XY Configuration" bind:expanded>
                    <Slider 
                        label="XY Row Sets"
                        min={0}
                        max={3}
                        bind:value={$row_sets_xy}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XY Column Sets"
                        min={0}
                        max={3}
                        bind:value={$column_sets_xy}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XY Rows"
                        min={0}
                        max={50}
                        bind:value={$rows_xy}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="XY Columns"
                        min={0}
                        max={100}
                        bind:value={$columns_xy}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Object Rotation" bind:expanded>
                    <Slider 
                        label="X rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xy_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xy_y}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Z rotation"
                        min={-180}
                        max={+180}
                        bind:value={$rotation_xy_z}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Position" bind:expanded>
                    <Slider 
                        label="dX position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xy_dx}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="dY position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xy_dy}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="dZ position"
                        min={-1000}
                        max={+1000}
                        bind:value={$position_xy_dz}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Spacing" bind:expanded>
                    <Slider 
                        label="X spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xy_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xy_y}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Z spacing"
                        min={-10000}
                        max={+10000}
                        bind:value={$spacing_xy_z}
                        format={(v) => v.toFixed(0)}
                    />
                </Folder>
                <Folder title="Set Spacing" bind:expanded>
                    <Slider 
                        label="X set spacing"
                        min={-1000}
                        max={+1000}
                        bind:value={$set_spacing_xy_x}
                        format={(v) => v.toFixed(0)}
                    />
                    <Slider 
                        label="Y set spacing"
                        min={-1000}
                        max={+1000}
                        bind:value={$set_spacing_xy_y}
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
                                bind:value={$equip_1_rows_xy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_1_columns_xy}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_1_rotation_xy_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xy_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xy_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_1_position_xy_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_1_spacing_xy_z}
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
                                bind:value={$equip_2_rows_xy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_2_columns_xy}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_2_rotation_xy_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xy_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xy_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_2_position_xy_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_2_spacing_xy_z}
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
                                bind:value={$equip_3_rows_xy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_3_columns_xy}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_3_rotation_xy_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xy_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xy_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_3_position_xy_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_3_spacing_xy_z}
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
                                bind:value={$equip_4_rows_xy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="XY Columns"
                                min={0}
                                max={100}
                                bind:value={$equip_4_columns_xy}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Object Rotation" bind:expanded>
                            <Slider 
                                label="X rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z rotation"
                                min={-180}
                                max={+180}
                                bind:value={$equip_4_rotation_xy_z}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Postion" bind:expanded>
                            <Slider 
                                label="dX position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xy_dx}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dY position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xy_dy}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="dZ position"
                                min={-1000}
                                max={+1000}
                                bind:value={$equip_4_position_xy_dz}
                                format={(v) => v.toFixed(0)}
                            />
                        </Folder>
                        <Folder title="Spacing" bind:expanded>
                            <Slider 
                                label="X spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xy_x}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Y spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xy_y}
                                format={(v) => v.toFixed(0)}
                            />
                            <Slider 
                                label="Z spacing"
                                min={-10000}
                                max={+10000}
                                bind:value={$equip_4_spacing_xy_z}
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
                        bind:value={$productionline_env_xy_x}
                        format={(v) => v.toFixed(3)}
                    />
                    <Slider 
                        label="Height/Dept [m]"
                        min={0.000}
                        max={4.000}
                        bind:value={$productionline_env_xy_y}
                        format={(v) => v.toFixed(3)}
                    />
                    <Slider 
                        label="Width [m]"
                        min={0.000}
                        max={2.000}
                        bind:value={$productionline_env_xy_z}
                        format={(v) => v.toFixed(3)}
                    />
                </Folder>
                <Folder title="Color Configuration" bind:expanded>
                    <Slider 
                        label="Opacity"
                        min={0.000}
                        max={1.000}
                        bind:value={$env_xy_opacity}
                        format={(v) => v.toFixed(3)}
                    />
                    <Color 
                        label="Boundig Box Color" 
                        bind:value={$env_xy_color_hex} 
                        picker='popup' 
                    />
                </Folder>
            </TabPage>
        </TabGroup>
    </Folder>
</Pane>
