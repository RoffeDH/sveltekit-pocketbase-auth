import type { LayoutServerLoad } from './$types'
import { getUserByUsername } from '$lib/pocketbase.svelte'

export const load: LayoutServerLoad = async ({ params, locals: { pb } }) => {
    
}