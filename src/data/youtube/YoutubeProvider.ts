import { Readable } from 'stream'
import ytdl from 'ytdl-core'

import { AudioInfo } from '@/domain/models/audio/AudioInfo'
import { IAudioProvider } from '@/domain/providers/audio/IAudioProvider'

export class YoutubeProvider implements IAudioProvider {


  async getAudioStreamById(id: string): Promise<Readable> {
    return ytdl(`http://www.youtube.com/watch?v=${id}`, {
      quality: 'highestaudio',
      filter: 'audioonly'
    })
  }

  async getAudioInfoById(id: string): Promise<AudioInfo> {
    const info = await ytdl.getInfo(id)
    return new AudioInfo({
      title: info.videoDetails.title,
      durationInSeconds: parseInt(info.videoDetails.lengthSeconds),
      thumbnailUrl: info.videoDetails.thumbnails.pop()?.url ?? ''
    })
  }
}