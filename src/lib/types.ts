import PocketBase, { RecordService } from 'pocketbase'
export type { AuthModel, ClientResponseError } from 'pocketbase'

export interface Adam {
	id: string
	collectionId: string
	collectionName: string
	created: string
	updated: string
	type: string
	format: string
	status: string
	content: string
	aside: string
	author: string
	tags: string[]
	title: string
	location: string
	category: string[]
	photos: string[]
	actualCreated: string
	views: number
}

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

// export interface UserReview {
// 	dickReview: DickRate
// }

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
	collection(idOrName: 'users'): RecordService<User>
	// collection(idOrName: 'adam'): RecordService<Adam>
	// collection(idOrName: 'quotes_public'): RecordService<Adam>
}
