<script lang="ts">
	import type { Snippet } from "svelte"

    let { children }: { children: Snippet} = $props()
</script>

<div class="stats stats-vertical shadow-xl lg:stats-horizontal max-w-96">
    {@render children()}
</div>