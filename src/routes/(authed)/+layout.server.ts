import { pbError } from '$lib/pocketbase.svelte.js'
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	locals.security.isRegistered()
}