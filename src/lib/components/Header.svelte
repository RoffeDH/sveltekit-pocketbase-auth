<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let isAuthenticated = $derived($page.data.user?.id)
</script>

<header class="my-4">
	<div class="navbar bg-neutral px-4">
		<div class="navbar-start">
			<a class="text-xl btn btn-ghost p-0" href="/" >Minxes</a>
		</div>

		<div class="navbar-center">

		</div>

		<div class="navbar-end">
			<form method="post">
				<button formaction="/?/logout">Logout</button>
			</form>
		</div>
	</div>
</header>