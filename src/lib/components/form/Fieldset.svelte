<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    import type { Snippet } from "svelte";
    let { data, children, class: classes } : { 
        data?: any[];
        children: Snippet;
        class: string;
    }   = $props();
</script>

<fieldset class={twMerge("grid grid-cols-auto grid-flow-row-dense gap-1", classes)}>
        {@render children()}
</fieldset>