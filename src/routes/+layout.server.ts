import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, url }) => {
	let results = { user: locals.user ?? null }

	!locals.user && url.pathname != '/' && redirect(303, '/');
	
	return results
}