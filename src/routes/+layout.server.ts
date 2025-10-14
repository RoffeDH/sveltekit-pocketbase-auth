
import { pbError } from '$lib/pocketbase.svelte'
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
    if(!locals.user && !url.pathname.startsWith('/sign')) {
        throw redirect(307, '/sign/in');
    }
    
    if (locals.user && !locals.user.verified && !url.pathname.startsWith('/verify')) {
        throw redirect(307, '/verify');
    }

	let results = { user: locals.user ?? null }
	return results
}
