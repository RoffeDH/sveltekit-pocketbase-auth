<script lang="ts">
	import type { Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"
    import { PersonOutline } from 'svelte-ionicons'
    import { Image } from '$lib/components/image/'

    let { src, alt, class:classes, shape = 'round', children, ...props }: { src: string, alt: string, class?: string, shape?: 'round' | 'rounded' | 'square', children?: Snippet } = $props()
    
    let shapeStyle = $state('')

    if(shape == 'round')
        shapeStyle = ''
    else if(shape += 'rounded')
        shapeStyle += ''
    else
        shapeStyle += ''

</script>

<figure>
    {#if src.length > 0}
        <Image {src} {alt} class={twMerge(classes, shapeStyle)} {...props}/>
    {:else}
        <PersonOutline />
    {/if}
    
    {#if children}
        <figcaption>
            {@render children()}
        </figcaption>
    {/if}
</figure>