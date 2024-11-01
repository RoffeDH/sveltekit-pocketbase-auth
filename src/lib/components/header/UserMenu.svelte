<script lang="ts">
    import Avatar from '$lib/components/Avatar.svelte'
	import { page } from '$app/stores'
	import type { User } from '$lib/types'
    import { scale } from 'svelte/transition'
    
	const user: User = $state($page.data.user)
    
    let animate = $state(false)
</script>

<div class="dropdown dropdown-end">
    <div
        tabindex=0
        role="button" 
        class="flex content-center p-1 rounded-full size-16 btn btn-ghost">
        <Avatar
            class='flex-grow transition ease-in-out hover:scale-90 size-16'
            alt='' 
            {user}
        />
    </div>
    <ul tabindex=0 class="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow" role="listbox">
        <li>
            <form method="post">
                <button formaction="/?/logout">Logout</button>
            </form>
        </li>
    </ul>
</div>