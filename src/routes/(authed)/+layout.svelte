<script>
	import { Header } from '$lib/components/header';
	let { children } = $props()
</script>

<Header class="self-center w-full md:max-w-[75rem] md:w-10/12" />
<main class="self-center flex-1 w-full px-5 md:max-w-[75rem] md:w-10/12">
    {@render children()}
</main>
<footer class="self-center flex-none w-full p-2 py-10 mt-2 md:max-w-[75rem] md:w-10/12 footer bg-neutral text-neutral-content h-max">
    Footer
</footer>
