<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import { UserMenu } from './index';

	let { class: classes = '', ...props } = $props();

	let isAuthenticated = $derived($page.data.user?.id)
</script>

<header {...props} class={twMerge("bg-slate-600 mb-2", classes)} >
	<div class="navbar">
		<div class="navbar-start">
			<a class="text-xl btn btn-ghost" href="/" >Minxes</a>
		</div>

		<div class="navbar-center">

		</div>

		<div class="navbar-end">
			<UserMenu />
		</div>
	</div>
</header>