// import type { PageServerLoad } from './$types';


// export const load: PageServerLoad = async ({ locals: { pb, user } }) => {
// 	return {
//         ratings: await pb.collection('ratings').getFullList({
//             sort: '-created',
//         })        
//     }
// }

let username = 'test'

import { redirect } from "@sveltejs/kit";

export function load({ request }) {
    redirect(302, `/reviews/${username}`)
}