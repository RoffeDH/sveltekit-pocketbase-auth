<script lang="ts">
	import type { PageData } from "./$types"
    import { Title } from '$lib/components/typography'


    let { data }: { data: PageData } = $props()
</script>

<!-- {#await data.users}
    <p>Loading...</p>
{:then users} 
    {#each users as user}
        {@debug user}
    {/each}
{/await} -->

<!-- {#await error} 
    {@debug error}
{/await} -->

{#await data.user}
    <p>Loading...</p>
{:then user}
    {#if user.status == 404}
        <h1>{user.message}</h1>
    {:else}
        <article class="flex flex-col">
            <Title>{user.username}</Title>
            
        </article>
    {/if}
{/await}