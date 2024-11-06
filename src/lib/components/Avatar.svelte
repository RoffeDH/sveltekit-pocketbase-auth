<script lang="ts">
	import type { User } from "$lib/types"
	import type { Snippet } from "svelte"

	import { getMediaURL } from "$lib/pocketbase.svelte"
	import { twMerge } from "tailwind-merge"
    import { PersonOutline } from 'svelte-ionicons'
	import { Image } from '$lib/components/image'

	let { src, id, alt = 'User avatar', class:classes, shape = 'round', children, ...props }: { src?: string, id?: string, alt?: string, class?: string, shape?: 'round' | 'rounded' | 'square', children?: Snippet } = $props()

	if(!src && id) {
		getMediaURL(id).then((val: string) => {
			src = val
		});
	}

    
    let shapeStyle = $state('avatar')

    if(shape == 'round')
        shapeStyle = ''
    else if(shape += 'rounded')
        shapeStyle += ''
    else
        shapeStyle += ''

</script>

<figure>
    {#if src && src.length > 0}
		<Image {src} {alt} class={twMerge(classes, shapeStyle)} {...props} />
    {:else}
        <PersonOutline class={twMerge(classes, shapeStyle)} />
    {/if}
    
    {#if children}
        <figcaption>
            {@render children()}
        </figcaption>
    {/if}
</figure>