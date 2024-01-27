<!-- src/routes/(app)/test_tweakpane/+page.svelte -->

<script lang="ts">
    // import {Pane} from 'tweakpane';

    import Configuration from '../view_stl_model/Configuration.svelte';   

    // // Dictionary
    // const PARAMS = {
    //     factor: '123',
    //     title: 'hello',
    //     color: '#ff0055',
    // };

    // const pane = new Pane({
    //     title: 'Color configuration',
    // });

    // pane.addBinding(PARAMS, 'factor');
    // pane.addBinding(PARAMS, 'title');
    // pane.addBinding(PARAMS, 'color');
</script>

<h1>Test Tweakpane</h1>
<p>+page.svelte</p>
<!-- <pane>{pane.children[0].element}</pane> -->
<Configuration />