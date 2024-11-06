import { error } from "@sveltejs/kit"
import type { PageServerLoad, Actions } from "./$types"

import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod'
import { getUserByUsername } from "$lib/pocketbase.svelte"

import { UserSchema } from '$lib/schemas'

export const load: PageServerLoad = async({params}) => {
    const activeAser = await getUserByUsername(params.user)

    if (!activeAser) error(404, 'User not found')

    const form = await superValidate(activeAser, zod(UserSchema))
    
    return {
        form
    }
}

export const actions = {
    update: async ({cookies, request}) => {
        const data = await request.formData()
        console.log('Form data:', data)
    }
} satisfies Actions;