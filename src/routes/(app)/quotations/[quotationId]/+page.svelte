<script lang="ts">
	// import { enhance } from "$app/forms";

    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	import type { PageData } from './$types';

	export let data: PageData;
    
    const { form, errors, enhance } = superForm(data.quotation) // // Error?: Does show data in SuperDebug

	$: ({ dbcustomers } = data );
    $: ({ dbmaterials } = data );
    $: ({ dbcolorsystems } = data );
    $: ({ dbsurfacetreatments } = data );
    $: ({ quotation } = data);
</script>

<!-- // // FOR DEVELOPMENT AND DEBUGGING ONLY -->
<SuperDebug data={$form}/>

<!-- <form action="?/updateQuotation" method="POST">
	<h3>Editing: {quotation.quotation_identifier}</h3>
	<label for="quotation_identifier"> Quotation Identifier </label>
	<input type="text" id="qid" name="qid" value={quotation.quotation_identifier} />

	<label for="quotation_item_quantity"> Quotation Quantity </label>
	<input id="qquant" name="qquant" value={quotation.quotation_quantity} />
	
	<button type="submit">Update Quotation</button>
</form> -->

<form action="?/updateQuotation" method="POST" use:enhance>
    <fieldset class="fieldset">
        <legend class="legend">New Quotation input</legend>
        <!-- <h3>New Quotation</h3> -->
        <div class="settings">
            <label for="quotation_identifier"> Quotation number </label>
            <!-- value={quotation.quotation_identifier} -->
            <!-- bind:value={$form.quotation_identifier} -->
            <input 
                type="text" 
                id="quotation_identifier" 
                name="quotation_identifier" 
                bind:value = {$form.quotation_identifier} 
                required />

            <!-- <label for="customer_identifier"> Customer number </label>
            <input type="text" id="customer_identifier" name="customer_identifier" /> -->
            <label for="customer_id"> Customer number </label>
            <input 
                type="text" 
                id="customer_id" 
                name="customer_id" 
                bind:value = {$form.customer_id} 
                required />

            <label for="customer"> Customer name </label>
            <!-- <input 
                type="text" 
                id="customer" 
                name="customer" 
                bind:value={$form.customer} 
                required /> -->
            <!-- <label for="customer_name"> Customer name </label>
            <input type="text" id="customer_name" name="customer_name" /> -->
            <select 
                id="customer"
                name="customer"
                bind:value = {$form.customer}
                required 
            >
                {#each dbcustomers as dbcustomer}
                    <option value={dbcustomer.customer_name}>
                        {dbcustomer.customer_name}
                    </option>
                {/each}
            </select>
            {#if $errors.customer}
                <br>
	            <small class="error">{$errors.customer}</small>
            {/if}
            
            <label for="quotation_item_identifier"> Quotation Item number</label>
            <input 
                type="text" 
                id="quotation_item_identifier" 
                name="quotation_item_identifier" 
                bind:value = {$form.quotation_item_identifier} 
                required />

            <label for="quotation_item_quantity"> Quotation item quantity </label>
            <input 
                type="text" 
                id="quotation_item_quantity" 
                name="quotation_item_quantity" 
                bind:value = {$form.quotation_item_quantity} 
                required />

            <label for="part_identifier"> Part number </label>
            <input 
                type="text" 
                id="part_identifier" 
                name="part_identifier" 
                bind:value = {$form.part_identifier} 
                required />

            <label for="material"> Material </label>
            <!-- <input 
                type="text" 
                id="material" 
                name="material" 
                bind:value={quotation.material} 
                required /> -->
            <select 
                id = "material"
                name = "material"
                bind:value = {$form.material}
                required
            >
                {#each dbmaterials as dbmaterial}
                    <option value = {dbmaterial.material_name}>
                        {dbmaterial.material_name}
                    </option>
                {/each}
            </select>
            {#if $errors.material}
                <br>
	            <small class="error">{$errors.material}</small>
            {/if}

            <label for="color_system"> Color System </label>
            <!-- <input 
                type="text" 
                id="color_system" 
                name="color_system" 
                value={quotation.color_system} 
                required /> -->
            <select 
                id = "color_system"
                name = "color_system"
                bind:value = {$form.color_system}
                required
            >
                {#each dbcolorsystems as dbcolorsystem}
                    <option value = {dbcolorsystem.colorsystem_name}>
                        {dbcolorsystem.colorsystem_name}
                    </option>
                {/each}
            </select>
            {#if $errors.color_system}
                <br>
	            <small class="error">{$errors.color_system}</small>
            {/if}

            <label for="end_color_identifier"> End Color number </label>
            <input 
                type="text" 
                id="end_color_identifier" 
                name="end_color_identifier" 
                bind:value = {$form.end_color_identifier} 
                required />
            
            <label for="paint_system"> Paint System </label>
            <select 
                id="paint_system"
                name="paint_system"
                bind:value = {$form.paint_system}
                required
            >
                {#each dbsurfacetreatments as dbsurfacetreatment}
                    <option value={dbsurfacetreatment.surfacetreatment_name}>
                        {dbsurfacetreatment.surfacetreatment_name}
                    </option>
                {/each}
            </select>
            {#if $errors.paint_system}
                <br>
	            <small class="error">{$errors.paint_system}</small>
            {/if}

            <label for="process_5"> Process 5 </label>
            <!-- type checkbox input does not reproduce the correct value: "value={quotation.process_5" -->
            <input 
                type="checkbox" 
                id="process_5" 
                name="process_5" 
                bind:checked = {$form.process_5} />

            <label for="process_4"> Process 4 </label>
            <input 
                type="checkbox" 
                id="process_4" 
                name="process_4" 
                bind:checked = {$form.process_4} />

            <label for="process_3"> Process 3 </label>
            <input 
                type="checkbox" 
                id="process_3" 
                name="process_3" 
                bind:checked = {$form.process_3} />

            <label for="process_2"> Process 2 </label>
            <input 
                type="checkbox" 
                id="process_2" 
                name="process_2" 
                bind:checked = {$form.process_2} />

            <label for="process_1"> Process 1 </label>
            <input 
                type="checkbox" 
                id="process_1" 
                name="process_1" 
                bind:checked = {$form.process_1} />

            <label for="model_3d"> 3D model </label>
            <!-- type file input does not accept a value: "value={quotation.model_3d" -->
            <input
                accept=".stp, .step, .p21"

                id="model_3d"
                name="3d_model"
                type="file"
                required 
                bind:value={$form.model_3d} />
            <!-- {#if model_files}
            <h2>Selected files:</h2>
            {#each Array.from(model_files) as model_file} -->
                <!-- // // <p>{model_file.name} (model_file.size} bytes) </p> -->
                <!-- <p>{model_file} </p>
            {/each}
            {/if} -->
            <!-- {#if $errors.model_3d}
                <br>
                <small class="error">{$errors.model_3d}</small>
            {/if} -->
            
            
            <label for="drawing_2d"> 2D drawing </label>
            <!-- type file input does not accept a value: "value={quotation.drawing_2d" -->
            <input
                accept=".pdf"

                id="drawing_2d"
                name="drawing_2d"
                type="file"
                bind:value={$form.drawing_2d} 
            />
            <!-- {#if drawing_files}
            <h2>Selected files:</h2>
            {#each Array.from(drawing_files) as drawing_file} -->
                <!-- // // <p>{drawing_file.name} ({drawing_file.size} bytes) </p> -->
                <!-- <p>{drawing_file.name} </p>
            {/each}
            {/if} -->
            <!-- {#if $errors.drawing_2d}
                <br>
	            <small class="error">{$errors.drawing_2d}</small>
            {/if} -->

        </div>    
    </fieldset>
    <div class="btn-text-center">
        <p></p>
        <!-- Execution does NOT update the database entries -->
        <p><button type="submit">Update Quotation</button></p>
    </div>
</form>




<style>
	/* h3 {
		text-align: center;
	} */
	/* p {
		text-align: center;
	} */
	p {
		text-align: center;
	}


    /* CSS */
    div.settings {
        display: grid;
        /* text-align: center; */
        grid-template-columns: max-content max-content;
        grid-gap: 5px;
    }
    div.settings label       { text-align:right; }
    div.settings label:after { content: ":"; }
</style>