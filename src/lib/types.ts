import PocketBase, { RecordService } from 'pocketbase'
export type { AuthModel, ClientResponseError } from 'pocketbase'

export interface GravatarUrl {
	border?: boolean
	email: string
	option?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank'
	round?: boolean
	size?: string
}

export interface User {
	admin: boolean
	avatar: string
	collectionId: string
	collectionName: string
	created: string
	email: string
	emailVisibility: boolean
	id: string
	name: string
	updated: string
	username: string
	verified: boolean
}

export interface Media {
	id: string
	created: Date
	updated: Date
	alt: string
	file: string
	owner: string
}

export interface Rating {
	report: JSON
	owner: string
	subject: string
	description: string
	aspect: "dick" | "pussy" | "ass" | "tits" | "mouth" | "body" | "face" | "looks" | "personality"
}

export interface DickRate {
	length: number
	girth: number
	shape: number
	hardness: number
	taste: number
	feel: number
	stamina: number
	enjoyment: number
	fits: boolean
}

// https://github.com/pocketbase/js-sdk?tab=readme-ov-file#specify-typescript-definitions
export interface TypedPocketBase extends PocketBase {
	collection(idOrName: 'users'): RecordService<User>,
	collection(idOrName: 'media'): RecordService<Media>,
	collection(idOrName: 'ratings'): RecordService<Rating>
}
