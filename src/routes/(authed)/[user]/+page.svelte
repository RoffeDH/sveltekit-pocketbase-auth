<script lang="ts">
	import type { PageData } from "./$types"
    import type { User } from "$lib/types";
    import { Title } from '$lib/components/typography'
	import { Button } from "$lib/components/blocks"
	import { onMount } from "svelte"
	import { enhance } from "$app/forms"
    import { superForm } from 'sveltekit-superforms'
    import { Avatar } from '$lib/components'

    let { data }: { data: PageData } = $props()
    let editable = $state(false)
    let userDuplicate = $state({})

    onMount(() => {
        userDuplicate = data.user
    })

    const { form } = $state(superForm(data.form))


    function Save() {
        editable = !editable
    }

    function Cancel() {
        userDuplicate = data.user
        editable = !editable
    }
</script>

{#await form}
    <p>Loading...</p>
{:then}
    <!-- {#if user.status == 404}
        <h1 class="text-error">{user.message}</h1>
    {:else} -->
        <form class="flex flex-col" method="POST" onsubmit={() => {Save()}} use:enhance action="?/update">
            {#if editable}
                <Button type="submit">Update</Button>
                <Button onclick={() => {Cancel()}}>Cancel</Button>
            {:else}
                <Button class="hello" onclick={() => editable = !editable}>Edit</Button>
            {/if}
            
            <input type="hidden" value={$form.id} name="id" />
            
            {#if editable}
                <input type="text" value={$form.username} name="username" />
            {:else}
                <Title>{$form.username}</Title>
            {/if}

            <Avatar src={$form.avatar} alt={$form.username} />
            {#if editable}
                <Button>Change avatar</Button>
            {/if}
            
            {#if editable}
                <input type="text" value={$form.email} name="email" /> <input type="checkbox" value={$form.emailVisibility} name="emailVisibility"/>
            {:else if $form.emailVisibility}
                <Title>{$form.email}</Title>
            {/if}
        </form>
    <!-- {/if} -->
{/await}