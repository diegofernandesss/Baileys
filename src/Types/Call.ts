export type WACallUpdateType = 'offer' | 'ringing' | 'timeout' | 'reject' | 'accept' | 'terminate'

export type WACallEvent = {
	chatId?: string
	from?: string
	remoteJidAlt?: string
	isGroup?: boolean
	groupJid?: string
	id?: string
	date?: Date
	isVideo?: boolean
	status?: WACallUpdateType
	offline?: boolean
	fromMe?: boolean
	latencyMs?: number
}
