<script lang="ts">
	import type { Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"

    let { class: classes = "", children, ...props }: { class?: string, children: Snippet } = $props();
</script>

<h1
    class={twMerge('font-serif text-3xl', classes)}
>
    {@render children()}
</h1>