<script lang="ts">
    import type { DickRate } from '$lib/types.js'
    import Review from '$lib/components/reviews'

    const { data } = $props()
</script>

<h1 class="text-2xl">Reviews</h1>
<div class="flex flex-col">
    {#await data.ratings}
        <p>Loading...</p>
    {:then ratings}
        {@debug ratings}
        {#if ratings.length < 1}
            <h1 class="text-error">No reviews found</h1>
        {:else}
            {#each ratings as rating}
                {@const report: DickRate = rating.report}
                <h2 class="text-l ">{rating.aspect}</h2>
                <p>{rating.description}</p>
                <Review.List>
                    <Review.Item name="Length" value={report.length} />
                    <Review.Item name="Girth" value={report.girth} />
                    <Review.Item name="Shape" value={report.shape} />
                    <Review.Item name="Hardness" value={report.hardness} />
                    <Review.Item name="Taste" value={report.taste} />
                    <Review.Item name="Feel" value={report.feel} />
                    <Review.Item name="Stamina" value={report.stamina} />
                    <Review.Item name="Enjoyment" value={report.enjoyment} />
                    <Review.Item name="Fits" value={report.fits} />
                </Review.List>
            {/each}
        {/if}
    {/await}
</div>