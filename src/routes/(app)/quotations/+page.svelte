<script lang="ts">
    // Use dayjs for timestamp in filename "https://github.com/metonym/svelte-time#dayjs-export"
    // import { dayjs, Time, svelteTime } from "svelte-time";
    // import Time from "svelte-time";
    
    import { superForm } from "sveltekit-superforms/client"    
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

    import type { PageData } from "./$types";
	import type { Float } from "@threlte/extras";

    export let data: PageData;

    const { form, errors, enhance } = superForm(data.form)

    $: ({ quotations } = data );

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
<!-- <SuperDebug data={$form}/> -->

<!-- // // List all quotations -->
<div class="box">
    <h2><strong><u>Quotations:</u></strong></h2>
    <!-- <header>
        <table border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th scope="col">Quotation number</th>
                    <th scope="col">Quotation item</th>
                    <th scope="col">Part number</th>
                    <th scope="col">Material</th>
                    <th scope="col">Color system</th>
                    <th scope="col">Color identifier</th>
                    <th scope="col">Surface treatment</th>
                </tr>
            </thead>
        </table>
    </header> -->

    {#each quotations.reverse() as quotation}
        <form action="?/deleteQuotation&id={quotation.id}" method="POST">
            <quotation>
                <!-- Show article -->
                <header>
                    <!-- Quotation number : {quotation.quotation_identifier} -->
                    <table border="0" cellspacing="0" cellpadding="0">
                        <thead>
                            <tr>
                                <th scope="col">Quotation number</th>
                                <th scope="col">Quotation item</th>
                                <th scope="col">Part number</th>
                                <th scope="col">Material</th>
                                <th scope="col">Color system</th>
                                <th scope="col">Color identifier</th>
                                <th scope="col"><strong><u>Surface treatment</u></strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{quotation.quotation_identifier}</td>
                                <td>{quotation.quotation_item_identifier}</td>
                                <td>{quotation.part_identifier}</td>
                                <td>{quotation.material}</td>
                                <td>{quotation.color_system}</td>
                                <td>{quotation.end_color_identifier}</td>
                                <td>{quotation.paint_system}</td>
                                <!-- <td>
                                    <form action="?/deleteQuotation&id={quotation.id}" method="POST"> -->
                                        <td>
                                            <!-- // // Edit quotation -->
                                            <a href="/quotations/{quotation.id}" 
                                                role="button" 
                                                class="outline constrast" 
                                                style="width: 100%;">
                                                Edit Quotation item
                                            </a>
                                        </td>
                                        <td>
                                            <!-- // // Delete Quotation item -->
                                            <!-- * * * DISABLE THIS BUTTON BEFOR PRODUCTION RELEASE ! ! ! * * * -->
                                            <button type="submit" class="outline secondary"> Delete Q-item </button>
                                        </td>
                                    <!-- </form>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </header>
                
                <!-- <form action="?/deleteQuotation&id={quotation.id}" method="POST"> -->
                    <!-- // // Edit quotation -->
                    <!-- <a href="/quotation/{quotation.id}" 
                        role="button" 
                        class="outline constrast" 
                        style="width: 100%;">
                        Edit Quotation
                    </a> -->
                    <!-- // // Delete Quotation -->
                    <!-- <button type="submit" class="outline secondary">Delete Quotation</button>
                </form> -->
            </quotation>
        </form>
        <br>
    {/each}
</div>


<style>
	/* p {
		text-align: center;
	} */

    /* CSS */
    form {
        /* // Center the form on the page */
        /* margin: 0 auto; */
        width: 1500px;
        /* // Form outline */
        /* padding: 1.0em; */
        /* padding-left: 1.5em; */
        /* padding-right: 1.5em; */
        /* padding-bottom: 1.5em; */
        /* // border: 1px solid #ccc; */
        /* border: 1px solid #00f; */
        /* border-radius: 1.8em; */
        /* padding-inline: 1.50em; */
    }

    th,
    td {
        width: 155px;
        border: 1px solid black;
        /* background-color: white; */
        background-color: var(--bg-2); /* --bg-2: hsl(206, 20%, 90%) */
        padding: 4px 6px;
        text-align: left;
    }

    /* div.settings { */
        /* display: grid; */
        /* // text-align: center; */
        /* grid-template-columns: max-content max-content; */
        /* grid-gap: 5px; */
    /* } */
    /* div.settings label       { text-align:right; } */
    /* div.settings label:after { content: ":"; } */
</style>
