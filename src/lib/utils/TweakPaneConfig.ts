// src/lib/utils/useTweakpane.ts
import { onDestroy } from 'svelte'
import { get, writable, type Writable } from 'svelte/store'
import { Pane } from 'tweakpane'
import type { 
    FolderApi, // v3
    TabPageApi, // v3
    BindingParams, //v3
    // Pane, 
    SliderBladeApi // v3 or HR?
} from 'tweakpane'
import * as tweakpaneDefault from 'tweakpane'
import type { PaneConfig } from 'tweakpane/dist/types/pane/pane-config'

import * as tweakpaneCore from '@tweakpane/core' // // Commented out 20240119 because only refferred to on lin 11

// const tp = (tweakpaneDefault as any).default ?? tweakpaneDefault
const tpC = ((tweakpaneCore as any).default ?? tweakpaneCore) as any // // Commented out 20240119 because only refferred to on lin 13

// const className = tpC.ClassName('ph') // // Commented out 20240119 because on pull request linter gives an Error

export const TweakPaneConfig = (config?: Omit<PaneConfig, 'container' | 'document'>) => {
	if (typeof window === 'undefined') throw new Error('useTweakpane can only be used in the browser')
	let disposed = false

	// const pane = new tp.Pane(config) as Pane
    // const pane = new Pane(config) as Pane
    const pane = new Pane({
        title: 'TweakPaneConfig: Color configuration',
		expanded: false
    })

	const unsubscriptions = new Set<() => void>()

	const action = (node: HTMLElement) => {
		node.append(pane.element)

		// THIS IS TO ENSURE THAT CSS IS HANDLED EQUALLY
		// IN A PLAYGROUND AND IN A REGULAR EXAMPLE
		node.style.width = 'calc(100% - 3rem)'
		node.style.maxWidth = '300px'

		// // https://cocopon.github.io/tweakpane/theming/#builder
		// node.style.setProperty('.tp-tbiv_t', 'position: relative') // // Temporary to fix bug. Don't see differnce.


		return {
			destroy() {
				if (disposed) return
				pane.dispose()
				unsubscriptions.forEach((unsubscribe) => unsubscribe())
				disposed = true
			},
		}
	}

	const addButton = (options: {
		title: string
		label?: string
		onClick: () => void
		parent?: FolderApi | TabPageApi
	}) => {
		const button = (options.parent ? options.parent : pane).addButton({
			title: options.title,
			label: options.label,
		})
		button.on('click', options.onClick)
	}

	// New function for sliders
	const addSlider = (options: {
		min: number
		max: number
		step?: number
		store: Writable<number>
		start_value: number
		parent?: FolderApi | TabPageApi
		label?: string
	}) => {
		const slider = (options.parent ? options.parent : pane).addBlade({
			// view: ['slider'], // // 2023110 v3
			// // 20231110 v4: Add 'separator' to "view: []"
			view: ['slider', 'separator'], // // 2023110 v4
			label: options.label,
			min: options.min,
			max: options.max,
			value: options.start_value,
			step: options.step,
			// }) as SliderApi; // // 20231110 v3
		}) as SliderBladeApi // // 20231110 v4
		slider.on('change', (e: { value: number }) => {
			options.store.set(e.value)
		})
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
	// const addInput = <Value extends any>(options: {
    const addInput = <Value extends string | number>(options: {
		label: string
		value: Value
		// params?: InputParams // // 20231110 v3
		params?: BindingParams // // 20231110 v4
		parent?: FolderApi | TabPageApi
		store?: Writable<Value>
	}) => {
		const store = options.store ? options.store : writable<Value>(options.value)

		// const input = (options.parent ? options.parent : pane).addInput( // // 20231110 v3
		const input = (options.parent ? options.parent : pane).addBinding(
			// // 20231110 v4
			{
				[options.label]: get(store),
			},
			options.label,
			options.params,
		)
		let initialSubscriptionProcessed = false
		let ignoreNextSubscriptionEvent = false
		let ignoreNextInputEvent = false
		input.on('change', (e: { value: Value }) => {
			if (ignoreNextInputEvent) {
				ignoreNextInputEvent = false
				return
			}
			ignoreNextSubscriptionEvent = true
			store.set(e.value)
		})
		const unsubscribe = store.subscribe((v) => {
			if (!initialSubscriptionProcessed) {
				initialSubscriptionProcessed = true
				return
			}
			if (ignoreNextSubscriptionEvent) {
				ignoreNextSubscriptionEvent = false
				return
			}
			ignoreNextInputEvent = true
			// input.controller_.binding.target.write(v) // // 20231110 v3
			input.controller.blade.value.arguments(v) // // 20231110 v4 THIS IS A WILD GUESS. NO CLUE WHAT IS DOES.
			input.refresh()
		})
		unsubscriptions.add(unsubscribe)
		return store
	}

	onDestroy(() => {
		if (disposed) return
		pane.dispose()
		unsubscriptions.forEach((unsubscribe) => unsubscribe())
		disposed = true
	})

	return {
		addTab: pane.addTab.bind(pane), // 20230923 added for Tabs.
		addFolder: pane.addFolder.bind(pane),
		// addSeparator: pane.addSeparator.bind(pane), // // 20231110 v3
		// // 20231110 v4 "separator" added to "AddSlider" code
		addButton,
		addSlider,
		addInput,
		action,
		pane,
	}
}
