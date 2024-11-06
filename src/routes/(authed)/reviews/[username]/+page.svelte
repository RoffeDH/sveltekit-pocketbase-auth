<script lang="ts">
    import type { DickRate } from '$lib/types.js'
    import Reviews from '$lib/components/reviews/index'

    const { data } = $props()
</script>

<h1 class="text-2xl">Reviewss</h1>
<div class="flex flex-col">
    {#await data.ratings}
        <p>Loading...</p>
    {:then ratings}
        {#if ratings.length < 1}
            <h1 class="text-error">No reviewss found</h1>
        {:else}
            {#each ratings as rating}
                {@const report: DickRate = rating.report}
                <h2 class="text-l ">{rating.aspect}</h2>
                <p>{rating.description}</p>
                <Reviews.List>
                    <Reviews.Item name="Length" value={report.length} />
                    <Reviews.Item name="Girth" value={report.girth} />
                    <Reviews.Item name="Shape" value={report.shape} />
                    <Reviews.Item name="Hardness" value={report.hardness} />
                    <Reviews.Item name="Taste" value={report.taste} />
                    <Reviews.Item name="Feel" value={report.feel} />
                    <Reviews.Item name="Stamina" value={report.stamina} />
                    <Reviews.Item name="Enjoyment" value={report.enjoyment} />
                    <Reviews.Item name="Fits" value={report.fits} />
                </Reviews.List>
            {/each}
        {/if}
    {/await}
</div>