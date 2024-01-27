<script lang="ts">
    import { Pane } from 'tweakpane';

    // // To Do, CHECK FUNCTIONALITY AND USE IF REQUIRED ! ! !
    // pane.refresh();

    
</script>

<svelte:head>
    <!-- https://tweakpane.github.io/docs/theming/#builder -->
    <!-- Append this element into the "svelte:head" element to apply the theme -->
    <style>
        :root {
            --tp-base-background-color: hsla(0, 0%, 95%, 1.00);
            --tp-base-shadow-color: hsla(0, 0%, 0%, 0.20);
            /* // // button and list */
            --tp-button-background-color: hsla(0, 0%, 100%, 1.00);
            --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);
            --tp-button-background-color-focus: hsla(0, 0%, 80%, 1.00);
            --tp-button-background-color-hover: hsla(0, 0%, 75%, 1.00);
            --tp-button-foreground-color: hsla(0, 0%, 0%, 1.00);
            
            --tp-container-background-color: hsla(0, 0%, 0%, 1.00);
            --tp-container-background-color-active: hsla(0, 0%, 25%, 1.00);
            --tp-container-background-color-focus: hsla(0, 0%, 20%, 1.00);
            --tp-container-background-color-hover: hsla(0, 0%, 15%, 1.00);
            --tp-container-foreground-color: hsla(0, 0%, 100%, 1.00);
            /* // // // Lines between UI items (not noticable in current 20231111 ui design) */
            --tp-groove-foreground-color: hsla(0, 0%, 0%, 1.00);
            /* // // // input, slider and checkbox */
            --tp-input-background-color: hsla(0, 0%, 0%, 1.00);
            --tp-input-background-color-active: hsla(0, 0%, 15%, 1.00);
            --tp-input-background-color-focus: hsla(0, 0%, 10%, 1.00);
            --tp-input-background-color-hover: hsla(0, 0%, 5%, 1.00);
            
            --tp-input-foreground-color: hsla(120, 100%, 50%, 1.00);
            
            /* // // // Text */
            --tp-label-foreground-color: hsla(0, 0%, 0%, 1.00);
            
            --tp-monitor-background-color: hsla(0, 0%, 0%, 1.00);
            --tp-monitor-foreground-color: hsla(0, 0%, 100%, 1.00);
        }
    </style>
</svelte:head>