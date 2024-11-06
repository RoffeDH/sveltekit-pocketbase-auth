<script lang="ts">
	import { twMerge } from "tailwind-merge"
    import { getMediaURL } from '$lib/pocketbase.svelte'

    let { class: classes, src, id, alt, ...props }: { class: string, src?: string, id?: string, alt: string } = $props()
    
    if(!src && id) {
		getMediaURL(id).then((val: string) => {
			src = val
		});
	}
</script>
{#if src}
    <img class={twMerge(classes, '')} {src} {alt} {...props} />
{:else}
    <div class={twMerge(classes, 'skeleton max-w-20 max-h-20')}></div>
{/if}