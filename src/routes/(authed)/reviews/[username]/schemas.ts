import { z } from 'zod'
import type { DickRate } from '$lib/types'

export const rating = z.object({
    report: z.string(),
    owner: z.string(),
    subject: z.string(),
    description: z.string(),
    aspect: z.string()
});

export const dickRating = z.object({
    length: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	girth: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	shape: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	hardness: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	taste: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	feel: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	stamina: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	enjoyment: z.number().int().max(10, 'Ratings don\'t go above 10').min(1, 'Ratings don\'t go below 1'),
	fits: z.boolean()
})