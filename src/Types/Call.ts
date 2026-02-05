export type WACallUpdateType = 'offer' | 'ringing' | 'timeout' | 'reject' | 'accept' | 'terminate'

export type WACallEvent = {
	chatId: string
	from: string
	isGroup?: boolean
	groupJid?: string
	id: string
	date: Date
	isVideo?: boolean
	status: WACallUpdateType
	offline: boolean
	latencyMs?: number
}


export type WACallEventMe ={
	key: {
		remoteJid: string
		participant?: string,
		fromMe: boolean,
		id: string
	}, message: {
		callMesage: {
			type: string,
			status: string
		}
	}, 
	messageTimestamp: string
}