<!-- src/routes/(app)/view-stl_model/Configuration.svelte -->

<!-- <script lang="ts">
    import {Pane} from 'tweakpane';

    const PARAMS = {
        ProductColor: '#0000ff',
        BoundigBoxColor: '#808080',
        Opacity: '0.315',
    };

    const pane = new Pane({
        title: 'Color Configuration',
    });

    const tab = pane.addTab({
        pages: [
            {title: 'Product'},
            {title: 'Bounding Box'},
        ],
    });

    tab.pages[0].addBinding(PARAMS, 'ProductColor', {
        label: 'Product Color',
        picker: 'inline', // 'inline | popup'
        expanded: false,
    });

    tab.pages[1].addBinding(PARAMS, 'Opacity', {
        label: 'Opacity',
        min: 0.000,
        max: 1.000,
        step: 0.005,
    });
    
    tab.pages[1].addBinding(PARAMS, 'BoundigBoxColor', {
        label: 'Boundig Box Color',
        picker: 'inline', // 'inline | popup'
        expanded: false,
    });
    
    // // To Do, CHECK FUNCTIONALITY AND USE IF REQUIRED ! ! !
    // pane.refresh();

    let disposed = false
    const unsubscriptions = new Set<() => void>()

    const action2 = (node: HTMLElement) => {
        node.append(pane.element)
        node.style.width = 'calc(100% - 3rem)'
        node.style.maxWidth = '370px'

        return {
            destroy() {
                if (disposed) return
                pane.dispose()
                unsubscriptions.forEach((unsubscribe) => unsubscribe())
                disposed = true
            }
        }
    }
</script>

<div use:action2 />

<svelte:head>
    
    <style>
        :root {
            /* // // https://tweakpane.github.io/docs/theming/#builder */
            /* // // Append this element into the "svelte:head" element to apply the theme */
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
            /* --tp-input-foreground-color: hsla(0, 100%, 50%, 1.00); */
            --tp-input-foreground-color: hsla(120, 100%, 50%, 1.00);
            /* --tp-input-foreground-color: hsla(240, 100%, 50%, 1.00); */
            /* // // // Text */
            --tp-label-foreground-color: hsla(0, 0%, 0%, 1.00);
            
            --tp-monitor-background-color: hsla(0, 0%, 0%, 1.00);
            --tp-monitor-foreground-color: hsla(0, 0%, 100%, 1.00);
        }
    </style>
</svelte:head> -->