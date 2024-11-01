<script lang="ts">
	import type { User } from "$lib/types"
	import { getAvatarUrl } from "$lib/pocketbase.svelte"
	import { twMerge } from "tailwind-merge"

	let { class: classes = null, user, alt = 'User avatar', ...props}: { class: string | null, user: User, alt: string } = $props()

	function handleError() {
		
	}
</script>

<div class={twMerge('avatar', classes)}>
	<div class="rounded-full">
		<img
			{...props}
			{alt}
			onerror={handleError}
			src={getAvatarUrl(user)}
		/>	
	</div>	
</div>
