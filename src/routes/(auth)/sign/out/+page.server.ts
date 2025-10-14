import type { PageServerLoad } from './$types';


export const load = (async ({ locals }) => {
	// +page.ts does invalidateAll() and redirect('/')
	locals.pb.authStore.clear()
	locals.user = null
}) satisfies PageServerLoad;