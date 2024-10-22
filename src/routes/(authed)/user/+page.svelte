<script lang="ts">
    import Fieldset from '$lib/components/form/Fieldset.svelte';
    import type { User } from '$lib/types';

	import { enhance } from '$app/forms'
    import { page } from '$app/stores'

    const user: User = $state($page.data.user);
</script>
{#snippet input(name: string, value: any)}
    <div class="flex flex-row join">
        <label for="{name}" class="w-20 rounded-r-full btn btn-primary join-item">{name}</label>
        <input
            autocomplete="username"
            {value}
            id="{name}"
            {name}
            type="{name}"
            required
            class="text-gray-800 bg-gray-200 input input-bordered join-item grow"
        />
    </div>
{/snippet}

<form method="POST" action="?/update" use:enhance>
    <input hidden value="{user.id}" name="id" />
    <Fieldset class="grid-cols-2 gap-2">
        {@render input('Username', user.username)}
        {@render input('E-mail', user.email)}
        {@render input('Created-at', user.created)}
        {@render input('Updated-at', user.updated)}
        {@render input('E-mail Visibility', user.emailVisibility)}
        {@render input('Verified', user.verified)}
        {@render input('Name', user.name)}
        {@render input('Admin', user.admin)}
        {@render input('role', user.role)}

        <button type="submit" class="btn btn-primary">Test</button>
    </Fieldset>
</form>