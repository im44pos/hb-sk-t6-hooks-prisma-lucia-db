<!-- BROWSER: INSPECTOR: CONSOLE: WARNING -->
<!-- <STL_MODEL_IMPORT> received an unexpected slot "default". -->
<!-- http://localhost:5173/@fs/C:/Users/Frans/GitHub/hb-sk-t6-hooks-prisma-lucia-db/node_modules/@sveltejs/kit/src/runtime/client/client.js?v=af760e74 client.js:2098:15 -->

<script lang="ts">
    // // Check type safety at Ref.: https://threlte.xyz/docs/learn/advanced/custom-abstractions
    import { useLoader, T } from '@threlte/core'
    import { useSuspense } from '@threlte/extras'
    import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

    import { Color } from 'three';
    import { 
      product_color_hex,
      stl_object_model_name
    } from '$lib/states/view_stl_model_state';

    // import {
    //     stl_object_model_name
    //   // } from '../routes/(app)/xy_config/state';
    //   } from '$lib/states/xy_config_state';
      
    const loader = useLoader(STLLoader)
    const suspend = useSuspense()

    const model_stl_path_file_name = stl_object_model_name

    // UI menu
    $: color = new Color($product_color_hex);
</script>
    
{#await suspend(loader.load(model_stl_path_file_name)) then geometry}
  <!-- {...$$restProps} Ref.: https://threlte.xyz/docs/learn/advanced/custom-abstractions -->
  <T.Mesh 
      scale={0.001} 
      {...$$restProps}
  >
    <T is={geometry} />
    <T.MeshStandardMaterial 
      color={color} 
      roughness={7/12} 
      metalness={13/16} 
      flatShading={true}
    />
  </T.Mesh>
{/await}