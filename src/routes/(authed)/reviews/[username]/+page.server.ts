import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals: { pb, user }, params }) => {
	const ratings = await pb.collection('ratings').getFullList({
        sort: '-created',
        filter: `subject.username = "${params.username}"`
    })

    return {
        ratings
    }
}

export const actions = {
    create: async (event) => {
        
    }
} satisfies Actions