import { z } from 'zod'

export const UserSchema = z.object({
	id: z.string(),
	username: z.string(),
	name: z.string(),
	avatar: z.string(),
	email: z.string().email().nullable(),
	emailVisibility: z.boolean().default(false),
	role: z.string().default('user'),
})

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