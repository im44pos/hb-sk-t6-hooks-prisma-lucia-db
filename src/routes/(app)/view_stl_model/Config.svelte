<script>
	import { invalidate, invalidateAll } from '$app/navigation';
	import { useTweakpane } from '$lib/utils/useTweakpane.ts';
	import { product_color_hex, bbox_color_hex, bbox_opacity } from '$lib/states/view_stl_model_state';


	const { action, addTab, addFolder, addInput } = useTweakpane({
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

	// const productFolder = viewConfigTab.pages[0].addFolder({
	// 	title: 'Color',
	// 	expanded: false
	// });

	addInput({
		label: 'Product Color',
		store: product_color_hex,
		value: $product_color_hex,
		params: {
			picker: 'inline',
			expanded: true
		},
		// parent: productFolder,
		parent: viewConfigTab.pages[0], // Product
	});

	const boundingboxFolder = viewConfigTab.pages[1].addFolder({
		title: 'Bounding Box Color',
		expanded: false
	});

	addInput({
		label: 'Bounding Box Color',
		store: bbox_color_hex,
		value: $bbox_color_hex,
		params: {
			picker: 'inline',
			expanded: true
		},
		parent: boundingboxFolder,
		// parent: viewConfigTab.pages[1], // Bounding Box
	});

	addInput({
		label: 'Opacity',
		store: bbox_opacity,
		value: $bbox_opacity,
		params: { min: 0.0, max: 1.0, step: 0.005 },
		parent: boundingboxFolder,
	});

	// const materialFolder = addFolder({
	// 	title: 'Material',
	// 	expanded: false
	// });

	// addInput({
	// 	parent: materialFolder,
	// 	label: 'Material',
	// 	value: $material,
	// 	store: material,
	// 	// params: {
	// 	// 	picker: 'inline',
	// 	// 	expanded: true
	// 	// }
	// });

</script>

<div use:action />

<style>
	/* .tp-tbiv_t {
		position: relative;
	} */
	/* :root { */
	  /* --tp-font-family: Arial; */
	  /* --tp-font-family: Calibri; */
	  /* --tp-font-family: Courier; */
	  /* --tp-font-family: Couriter; */
	  /* --tp-font-family: Tw Cen MT; */
  
	  /* Test, no result   ? ? ?    */
	  /* --tp-font-size: 14px; */
	/* } */
	/* .tp-rotv {
	  font-size: 16px;
	} */
  </style>