import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, url }) => {
	let results = { user: locals.user ?? null }

	locals.user && redirect(303, '/home');
	
	return results
}