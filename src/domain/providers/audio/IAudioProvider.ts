import { Readable } from 'stream'

import { AudioInfo } from '@/domain/models/audio/AudioInfo'

export interface IAudioProvider {
	getAudioStreamById(id: string): Promise<Readable>
	getAudioInfoById(id: string): Promise<AudioInfo>
}