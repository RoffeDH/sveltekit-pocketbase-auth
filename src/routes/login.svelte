<script lang="ts">
    import { enhance } from '$app/forms'
    
	let username = $state('')
	let password = $state('')
	let disabled = $derived(!username || !password)
</script>

<h2 class="card-title">Login</h2>
<form method="POST" use:enhance action="?/login">
    <fieldset class="grid gap-3 grid-auto-rows">
        <div class="flex flex-row join">
            <label for="username" class="w-20 rounded-r-full btn btn-primary join-item">Email</label>
            <input
                autocomplete="email"
                bind:value={username}
                id="email"
                name="email"
                type="email"
                required
                class="input input-bordered join-item grow"
            />
        </div>
        
        <div class="join">
            <label for="password" class="w-20 rounded-r-full btn btn-primary join-item">Password</label>
            <input
                autocomplete="on"
                bind:value={password}
                id="password"
                name="password"
                type="password"
                required
                class="input input-bordered join-item grow"
            />
        </div>

        <button class="btn btn-success" {disabled} type="submit">Sign in</button>

        <p>Not a member? <a class="link" href="/sign/up">Sign up for an account</a>.</p>
    </fieldset>
</form>