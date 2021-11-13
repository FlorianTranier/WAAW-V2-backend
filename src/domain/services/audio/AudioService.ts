import { Readable } from 'stream'
import { IAudioProvider } from '@/domain/providers/audio/IAudioProvider'
import { AudioInfo } from '@/domain/models/audio/AudioInfo'
export class AudioService {

  private readonly audioProvider: IAudioProvider

  constructor(p: { audioProvider: IAudioProvider }) {
    this.audioProvider = p.audioProvider
  }

  async getAudioStreamById(id: string): Promise<Readable> {
    return this.audioProvider.getAudioStreamById(id)
  }

  async getAudioInfoById(id: string): Promise<AudioInfo> {
    return this.audioProvider.getAudioInfoById(id)
  }
}