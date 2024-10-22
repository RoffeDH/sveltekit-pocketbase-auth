<script>
	import Header from '$lib/components/Header.svelte';
	let { children } = $props()
</script>

<Header />
<main class="flex-1 py-4">
    {@render children()}
</main>
<footer class="flex-none p-10 footer bg-neutral text-neutral-content h-max">
    Footer
</footer>
