import { Readable } from 'stream';
import { IAudioProvider } from '@/domain/providers/audio/IAudioProvider';
export class AudioService {

	private readonly audioProvider: IAudioProvider

	constructor(p: { audioProvider: IAudioProvider }) {
		this.audioProvider = p.audioProvider
	}

	async getAudioStreamById(id: string): Promise<Readable> {
		return this.audioProvider.getAudioStreamById(id)
	}

}