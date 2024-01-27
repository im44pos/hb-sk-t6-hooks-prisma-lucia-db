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
    let pane_width = 370;

    import { 
        product_color_hex, 
        bbox_color_hex, 
        bbox_opacity 
    } from '$lib/states/view_stl_model_state';
</script>

<!-- <Pane title="Color Configuration Pane" expanded={pane_expanded === true ? undefined: false} position='inline' width={300}> -->
<!-- <Pane title="Color Configuration Pane" bind:expanded={pane_expanded} position='inline' width={300}> -->
<Pane title="3D Model preview" position='inline' width={pane_width}>
    <Folder title="Color Configuration" bind:expanded>
        <TabGroup>
            <TabPage title="Product">
                <Color 
                    label="Product Color"
                    bind:value={$product_color_hex}
                    picker='popup'
                />
            </TabPage>
            <TabPage  title="Bounding Box">
                <Slider 
                    label="Opacity"
                    min={0.000}
                    max={1.000}
                    bind:value={$bbox_opacity}
                    format={(v) => v.toFixed(3)}
                />
                <Color 
                    label="Boundig Box Color" 
                    bind:value={$bbox_color_hex} 
                    picker='popup' 
                />
            </TabPage>
        </TabGroup>
    </Folder>
</Pane>