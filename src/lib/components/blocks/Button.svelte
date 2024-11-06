<script lang="ts">
	import type { Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"

  
  let { type = 'button', class: classes = '', onclick, children, ...rest }: { type?: 'button' | 'submit' | 'reset', class?: string, onclick?: void | any, children: Snippet } = $props();
</script>

<button 
    type={type}
    class={twMerge(classes, 'btn btn-neutral btn-md')}
    onclick={onclick}
    {...rest}
>
    {@render children()}
</button>