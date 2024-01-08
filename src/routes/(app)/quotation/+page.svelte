<script lang="ts">
    // Use dayjs for timestamp in filename "https://github.com/metonym/svelte-time#dayjs-export"
    // import { dayjs, Time, svelteTime } from "svelte-time";
    // import Time from "svelte-time";
    
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

    // import type { PageData } from "./$types";
    import type { PageData } from "../../$types";
	export let data: PageData;

    import type { Float } from "@threlte/extras";
    
    // import type { ActionData } from "./$types";
    
    import { page } from "$app/stores";

    const { form, errors, enhance } = superForm(data.form)

    $: ({ dbcustomers } = data );
    $: ({ dbmaterials } = data );
    $: ({ dbcolorsystems } = data );
    $: ({ dbsurfacetreatments } = data );
    $: ({ quotations } = data );

    console.log("dbcustomers : \n", dbcustomers);
    console.log("dbmaterials : \n", dbmaterials);
    console.log("company_name :\n", $page.data.company_name);

    $form.company_id = $page.data.company.company_identifier;
    $form.user_id = $page.data.user_name

    // import { page } from "$app/stores";
    

    // let selected_material: string;

    // let selected_paint_system: string;

    // let selected_value_stream: string;

    let model_files: FileList;
    $: if (model_files) {
        // Note that `model_files` is of type `FileList`, not an Array:
        // https://developer.mozilla.org/en-US/docs/Web/API/FileList
        console.log(model_files);

        for (const model_file of model_files) {
            console.log(`${model_file.name}: ${model_file.size} bytes`);
        }
    };

    let drawing_files: FileList;
    $: if (drawing_files) {
        // Note that `drawing_files` is of type `FileList`, not an Array:
        // https://developer.mozilla.org/en-US/docs/Web/API/FileList
        console.log(drawing_files);

        for (const drawing_file of drawing_files) {
            console.log(`${drawing_file.name}: ${drawing_file.size} bytes`);
        }
    };

    let nett_surface_area: number;
    let nett_volume: number;

    let mass: number;

    let bb_length: number;
    let bb_width: number;
    let bb_height: number;
    let bb_diagonal: number;

    nett_surface_area = 1.000;
    nett_volume = 0.010;
    mass = 10.000;
    bb_length = 1.000;
    bb_width = 0.820;
    bb_height = 0.501;
    bb_diagonal = 9.999;

    // let time_now = new Date()
</script>

<!-- // // FOR DEVELOPMENT AND DEBUGGING ONLY -->
<SuperDebug data={$form}/>


<form action="?/createQuotation" method="POST" use:enhance>
    <fieldset class="fieldset">
        <legend class="legend">Quotation input</legend>
        <div class="settings">
            <!-- <label for="company_identifier">Company</label>
            <output id="company_identifier" name="company_identifier">{$page.data.company.company_identifier}</output> -->
            
            <label for="company_name">Company</label>
            <output id="company_name" name="company_name">{$page.data.company.company_name}</output>

            <label for="user_name">User name</label>
            <output id="user_name" name="user_name">{$page.data.user_name}</output>
            
            <label for="quotation_identifier"> Quotation number</label>
            <input 
                type="text" 
                id="quotation_identifier" 
                name="quotation_identifier" 
                bind:value={$form.quotation_identifier} 
                required/>
            {#if $errors.quotation_identifier}
                <br>
	            <small class="error">{$errors.quotation_identifier}</small>
            {/if}

            <label for="quotation_description"> Quotation description </label>
            <input 
                type="text" 
                id="quotation_description" 
                name="quotation_description" 
                min="0" 
                bind:value={$form.quotation_description} 
                required/>
            {#if $errors.quotation_description}
                <br>
                <small class="error">{$errors.quotation_description}</small>
            {/if}
            <!-- <label for="customer_identifier"> Customer number </label>
            <input type="text" id="customer_identifier" name="customer_identifier" /> -->

            <label for="customer_id"> Customer number </label>
            <input 
                type="text" 
                id="customer_id" 
                name="customer_id" 
                bind:value={$form.customer_id} 
                required/>
            {#if $errors.customer_id}
                <br>
                <small class="error">{$errors.customer_id}</small>
            {/if}

            <!-- // // Customer as input field -->
            <!-- <label for="customer_name"> Customer name </label>
            <input type="text" id="customer_name" name="customer_name" bind:value={$form.customer_name} required/>
            {#if $errors.customer_name}
                <br>
	            <small class="error">{$errors.customer_name}</small>
            {/if} -->
            <!-- // // <label for="customer_name"> Customer name </label>
            <input type="text" id="customer_name" name="customer_name" /> -->
            <!-- // // Customer read from Database table entry -->
            <label for="customer"> Customer </label>
            <select 
                id="customer"
                name="customer"
                bind:value={$form.customer}
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

            
            
        </div>    
    </fieldset>
    <div class="btn-text-center">
        <p></p>
        <p><button type="submit">Add Quotation</button></p>
    </div>
</form>

<br>
<form action="?/createQuotationItem" method="POST" use:enhance>
    <fieldset class="fieldset">
        <legend class="legend">Quotation Item input</legend>
        <div class="settings">
            <label for="company">Company</label><p></p>
            <!-- <output id="company" name="company">{$page.data.company_identifier}</output> -->

            <label for="user">User</label><p></p>
            <!-- <output id="user" name="user">{$page.data.user}</output> -->

            <label for="quotation">Quotation</label><p></p>
            <!-- <output id="quotation" name="quotation">{$page.data.quotation}</output> -->

            <label for="customer"> Customer </label><p></p>
            <!-- <input type="text" id="customer" name="customer" /> -->

            <!-- <label for="customer_id"> Customer number </label>
            <input 
                type="text" 
                id="customer_id" 
                name="customer_id" 
                bind:value={$form.customer_id} 
                required/>
            {#if $errors.customer_id}
                <br>
                <small class="error">{$errors.customer_id}</small>
            {/if} -->

            <!-- // // Customer as input field -->
            <!-- <label for="customer_name"> Customer name </label>
            <input type="text" id="customer_name" name="customer_name" bind:value={$form.customer_name} required/>
            {#if $errors.customer_name}
                <br>
	            <small class="error">{$errors.customer_name}</small>
            {/if} -->
            <!-- // // <label for="customer_name"> Customer name </label>
            <input type="text" id="customer_name" name="customer_name" /> -->
            <!-- // // Customer read from Database table entry -->
            <label for="customer"> Customer </label>
            <select 
                id="customer"
                name="customer"
                bind:value={$form.customer}
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

            <label for="quotation_item_identifier"> Quotation Item number </label>
            <input 
                type="text" 
                id="quotation_item_identifier" 
                name="quotation_item_identifier" 
                bind:value={$form.quotation_item_identifier} 
                required/>
            {#if $errors.quotation_item_identifier}
                <br>
	            <small class="label-text-alt text-error"> {$errors.quotation_item_identifier}</small>
            {/if}
            
            <label for="quotation_item_description"> Quotation Item description </label>
            <input 
                type="text" 
                id="quotation_item_description" 
                name="quotation_item_description" 
                bind:value={$form.quotation_item_description} 
                required/>
            {#if $errors.quotation_item_description}
                <br>
	            <small class="label-text-alt text-error"> {$errors.quotation_item_description}</small>
            {/if}
            
            <label for="quotation_item_quantity"> Quotation item quantity </label>
            <input 
                type="number" 
                id="quotation_item_quantity" 
                name="quotation_item_quantity" 
                min="0" 
                bind:value={$form.quotation_item_quantity} 
                required/>
            {#if $errors.quotation_item_quantity}
                <br>
                <small class="error">{$errors.quotation_item_quantity}</small>
            {/if}

            <label for="part_identifier"> Part number </label>
            <input 
                type="text" 
                id="part_identifier" 
                name="part_identifier" 
                bind:value={$form.part_identifier} 
                required/>
            {#if $errors.part_identifier}
	            <br>
                <small class="error">{$errors.part_identifier}</small>
            {/if}

            <label for="part_description"> Part description </label>
            <input 
                type="text" 
                id="part_description" 
                name="part_description" 
                bind:value={$form.part_description} 
                required/>
            {#if $errors.part_description}
	            <br>
                <small class="error">{$errors.part_description}</small>
            {/if}

            <label for="material"> Material </label>
            <!-- <input type="text" id="material" name="material" bind:value={$form.material} required/> -->
            <!-- {#if $errors.material}
	            <br>
                <small class="error">{$errors.material}</small>
            {/if} -->
            <!-- Material -->
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
            <!-- <input type="text" id="color_system" name="color_system" bind:value={$form.color_system} required/>
            {#if $errors.color_system}
                <br>
	            <small class="error">{$errors.color_system}</small>
            {/if} -->
            <!-- Color -->
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
                bind:value={$form.end_color_identifier} 
                required/>
            {#if $errors.end_color_identifier}
                <br>
	            <small class="error">{$errors.end_color_identifier}</small>
            {/if}

            <!-- <label for="paint_system"> Paint System </label> -->
            <!-- <input type="text" id="paint_system" name="paint_system" bind:value={$form.paint_system} required/> -->
            <label for="surface_treatment"> Surface Treatment (Paint System) </label>
            <select 
                id="surface_treatment"
                name="surface_treatment"
                bind:value={$form.surface_treatment}
                required
            >
                {#each dbsurfacetreatments as dbsurfacetreatment}
                    <option value={dbsurfacetreatment.surfacetreatment_name}>
                        {dbsurfacetreatment.surfacetreatment_name}
                    </option>
                {/each}
            </select>
            {#if $errors.surface_treatment}
                <br>
	            <small class="error">{$errors.surface_treatment}</small>
            {/if}

            <!-- <label for="process_5"> Process 5 </label>
            <input type="checkbox" id="process_5" name="process_5" bind:checked={$form.process_5}/>
            
            <label for="process_4"> Process 4 </label>
            <input type="checkbox" id="process_4" name="process_4" bind:checked={$form.process_4}/>

            <label for="process_3"> Process 3 </label>
            <input type="checkbox" id="process_3" name="process_3" bind:checked={$form.process_3}/>

            <label for="process_2"> Process 2 </label>
            <input type="checkbox" id="process_2" name="process_2" bind:checked={$form.process_2} />

            <label for="process_1"> Process 1 </label>
            <input type="checkbox" id="process_1" name="process_1" bind:checked={$form.process_1} /> -->

            <label for="model_3d"> 3D model </label>
            <input
                accept=".stp, .step, .p21"
                id="model_3d"
                name="model_3d"
                type="file"
                bind:value={$form.model_3d} 
                required
            />
            {#if model_files}
            <h2>Selected files:</h2>
            {#each Array.from(model_files) as model_file}
                <!-- <p>{model_file.name} (model_file.size} bytes) </p> -->
                <p>{model_file} </p>
            {/each}
            {/if}
            <!-- {#if $errors.model_3d}
                <br>
	            <small class="error">{$errors.model_3d}</small>
            {/if} -->
            

            <label for="drawing_2d"> 2D drawing </label>
            <input
                accept=".pdf"
                id="drawing_2d"
                name="drawing_2d"
                type="file"
                bind:value={$form.drawing_2d}
            />
            {#if drawing_files}
            <h2>Selected files:</h2>
            {#each Array.from(drawing_files) as drawing_file}
                <!-- <p>{drawing_file.name} ({drawing_file.size} bytes) </p> -->
                <p>{drawing_file.name} </p>
            {/each}
            {/if}
            <!-- {#if $errors.drawing_2d}
                <br>
	            <small class="error">{$errors.drawing_2d}</small>
            {/if} -->

            
            
            <!-- <label for="nett_surface_area">Nett Surface Area</label>
            <output id="nett_surface_area">{nett_surface_area} [m<sup>2</sup>]</output>
            
            <label for="nett_volume">Nett Volume</label>
            <output id="nett_volume">{nett_volume} [m<sup>3</sup>]</output>

            <label for="object_mass">Object Mass</label>
            <output id="object_mass">{mass} [kg]</output> -->



            <!-- <label for="time_stamp">Time Stamp</label>
            <output id="time_stamp"><Time timestamp={new Date()} format="YYYY-MM-DD hh:mm:sss"/></output>
            <label for="time_stamp">Time Stamp</label>
            <output id="time_stamp"><Time timestamp={new Date()} format="YYYYMMDDhhmmsss"/></output> -->

            <!-- <label for="time_stamp">Time Now</label>
            <output id="time_stamp"><Time live format="YYYY-MM-DD hh:mm:sss"/></output> -->

        </div>    
    </fieldset>
    <div class="btn-text-center">
        <p></p>
        <p><button type="submit">Add Quotation</button></p>
    </div>
</form>

<br>
<div class="container">
    <form>
        <fieldset class="fieldset">
            <legend class="legend">Model details</legend>
            <ul class="q-output">
                <table>
                    <tbody>
                        <tr>
                            <td><bold><u>Parameter</u></bold></td>
                            <td></td>
                            <td><bold><u>Value</u></bold></td>
                            <td></td>
                            <td><bold><u>Unit</u></bold></td>
                        </tr>
                        <tr>
                            <td><bold><u>Nett Surface Area</u></bold></td>
                            <td> :</td>
                            <td><output id="nett_surface_area" name="nett_surface_area">{nett_surface_area}</output></td>
                            <td> </td>
                            <td>[m<sup>2</sup>]</td>
                        </tr>
                        <tr>
                            <td><bold><u>Nett Volume</u></bold></td>
                            <td> :</td>
                            <td><output id="nett_volume" name="nett_volume">{nett_volume}</output></td>
                            <td> </td>
                            <td>[m<sup>3</sup>]</td>
                        </tr>
                        <tr>
                            <td><bold><u>Mass</u></bold></td>
                            <td> :</td>
                            <td><output id="object_mass">{mass}</output></td>
                            <td> </td>
                            <td>[kg]</td>
                        </tr>
                        <tr>
                            <td><bold><u>Bounding Box</u></bold></td>
                            <!-- <td> :</td> -->
                            <!-- <td><output type="text" id="object_obb" name="object_obb">x.xxx, y.yyy, z.zzz</output></td> -->
                            <td> </td>
                            <!-- <td>[m]</td> -->
                        </tr>
                        <tr>
                            <td style="text-align:center;">length (L)</td>
                            <td> :</td>
                            <td><output id="object_obb_l" name="object_obb_l">{bb_length}</output></td>
                            <td> </td>
                            <td>[m]</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">width (W)</td>
                            <td> :</td>
                            <td><output id="object_obb_w" name="object_obb_w">{bb_width}</output></td>
                            <td> </td>
                            <td>[m]</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">heigth (H)</td>
                            <td> :</td>
                            <td><output id="object_obb_h" name="object_obb_h">{bb_height}</output></td>
                            <td> </td>
                            <td>[m]</td>
                        </tr>
                        <tr>
                            <td>Bounding Box Diagonal (D)</td>
                            <td> :</td>
                            <td><output id="object_obb_d" name="object_obb_d">{bb_diagonal}</output></td>
                            <td> </td>
                            <td>[m]</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </fieldset>
        <p></p>
        <div class="btn-text-center">
            <button>Ok and save</button>
        </div>
    </form>
</div>


<!-- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype -->
<!-- form.enctype = "multipart/form-data"; -->
<form action="?/fileUpload" method="POST" use:enhance enctype="multipart/form-data">
    <fieldset class="fieldset">
        <legend class="legend">File Upoad input</legend>
        <div class="settings">
            <label for="model_3d"> 3D model </label>
            <input
                accept=".stp, .step, .p21"
                id="model_3d"
                name="model_3d"
                type="file"
                required
                bind:value={$form.model_3d} 
            />
            {#if model_files}
            <h2>Selected files:</h2>
            {#each Array.from(model_files) as model_file}
                <!-- <p>{model_file.name} (model_file.size} bytes) </p> -->
                <p>{model_file} </p>
            {/each}
            {/if}
            <!-- {#if $errors.model_3d}
                <br>
	            <small class="error">{$errors.model_3d}</small>
            {/if} -->

            <label for="drawing_2d"> 2D drawing </label>
            <input
                accept=".pdf"
                id="drawing_2d"
                name="drawing_2d"
                type="file"
                bind:value={$form.drawing_2d}
            />
            {#if drawing_files}
            <h2>Selected files:</h2>
            {#each Array.from(drawing_files) as drawing_file}
                <!-- <p>{drawing_file.name} ({drawing_file.size} bytes) </p> -->
                <p>{drawing_file.name} </p>
            {/each}
            {/if}
            <!-- {#if $errors.drawing_2d}
                <br>
	            <small class="error">{$errors.drawing_2d}</small>
            {/if} -->
    </div>
    <div class="btn-text-center">
        <p></p>
        <p><button type="submit">File Upload</button></p>
    </div>
</form>


<style>
	/* p {
		text-align: center;
	} */

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
