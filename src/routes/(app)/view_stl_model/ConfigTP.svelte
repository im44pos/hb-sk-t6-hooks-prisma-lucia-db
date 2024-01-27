<script lang="ts">
    import {Pane} from 'tweakpane';
    // import TweakPaneStyle from '$lib/Layout/TweakPane/TweakPaneStyle.svelte';

    import { TweakPaneConfig } from '$lib/utils/TweakPaneConfig.ts';
    // import { action } from '$lib/utils/TweakPaneConfig.ts';

    import { product_color_hex, bbox_color_hex, bbox_opacity } from '$lib/states/view_stl_model_state';

    // V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3 V3
    const { action, addTab, addFolder, addInput } = TweakPaneConfig({
		title: 'Color configuration',
		expanded: false
	});

    const viewConfigTab = addTab({
		pages: [
			{title: 'Product'},
			{title: 'Bounding Box'},
		],
		// expanded: false // // Would be a welcome option: https://cocopon.github.io/tweakpane/api/interfaces/TabParams.html
	});

    addInput({
		label: 'Product Color',
		store: product_color_hex,
		value: $product_color_hex,
		params: { picker: 'inline', expanded: false },
		parent: viewConfigTab.pages[0], // Product
	});

	addInput({
		label: 'Opacity',
		store: bbox_opacity,
		value: $bbox_opacity,
		params: { min: 0.0, max: 1.0, step: 0.005 },
		parent: viewConfigTab.pages[1], // Bounding Box
	});
	
	addInput({
		label: 'Bounding Box Color',
		store: bbox_color_hex,
		value: $bbox_color_hex,
		params: { picker: 'inline', expanded: false },
		parent: viewConfigTab.pages[1], // Bounding Box
	});


    // V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4 V4
    // const PARAMS = {
    //     ProductColor: '#0000ff',
    //     // ProductColor: $product_color_hex,
    //     BoundigBoxColor: '#808080',
    //     Opacity: '0.315',
    // };

    // const pane = new Pane({
    //     title: 'Color Configuration',
    // });

    // const tab = pane.addTab({
    //     pages: [
    //         {title: 'Product'},
    //         {title: 'Bounding Box'},
    //     ],
    // });

    // tab.pages[0].addBinding(PARAMS, 'ProductColor', {
    //     label: 'Product Color',
    //     // store: product_color_hex,
	// 	// value: $product_color_hex,
    //     picker: 'inline', // 'inline | popup'
    //     expanded: false,
    // });

    // tab.pages[1].addBinding(PARAMS, 'Opacity', {
    //     label: 'Opacity',
    //     min: 0.000,
    //     max: 1.000,
    //     step: 0.005,
    // });
    // // tab.pages[1].addBlade({
    // //     view: 'slider',
    // //     label: 'Slider label',
    // //     min: 0,
    // //     max: 1,
    // //     // store: product_color_hex,
    // //     // value: $product_color_hex,
    // //     value: 0.5,
    // // });
    // // tab.pages[1].addBinding(PARAMS, 'Opacity', {
    // //     // view: 'slider',
    // //     label: 'Slider label',
    // //     min: 0,
    // //     max: 1,
    // //     // value: 0.5,
    // // });

    // tab.pages[1].addBinding(PARAMS, 'BoundigBoxColor', {
    //     label: 'Boundig Box Color',
    //     picker: 'inline', // 'inline | popup'
    //     expanded: false,
    // });

    // let disposed = false
    // const unsubscriptions = new Set<() => void>()

    // const action3 = (node: HTMLElement) => {
    //     node.append(pane.element)
    //     node.style.width = 'calc(100% - 3rem)'
    //     node.style.maxWidth = '370px'

    //     return {
    //         destroy() {
    //             if (disposed) return
    //             pane.dispose()
    //             unsubscriptions.forEach((unsubscribe) => unsubscribe())
    //             disposed = true
    //         }
    //     }
    // }
</script>


<div use:action />

<!-- <TweakPaneStyle /> -->