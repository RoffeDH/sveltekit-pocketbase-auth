import type { Actions } from "./$types";
import type { User } from "$lib/types";

export const load = async ({ locals: { security, pb } }) => {
	security.isRegistered();
}

export const actions = {
    update: async ({ locals, request }) => {
        const data = await request.formData();
        if (locals.user.id !== data.get('id'))
        {
            
        } else {
            data.forEach((value, name) => {
                console.log(name + ':', value);
            });
            return { success: true }
        }
    }
} satisfies Actions