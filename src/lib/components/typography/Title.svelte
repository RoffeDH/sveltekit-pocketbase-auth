<script lang="ts">
	import type { Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"

    interface Props {
        class?: string
        editable?: boolean
        innerText?: string
        children: Snippet
    }

    let { class: classes = "", children, ...props }: Props = $props();
</script>

<h1 class={twMerge('font-serif text-3xl', classes)}>
    {@render children()}
</h1>