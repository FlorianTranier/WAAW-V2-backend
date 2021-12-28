import express, { Request, Response } from 'express'

import { AudioService } from '@/domain/services/audio/AudioService'
import { AudioInfoVM } from '@/web/audio/vm/AudioInfoVM'

export class AudioController {

  private readonly audioService: AudioService

  BASE_URL = '/audio'

  constructor(p: { httpInstance: express.Application, audioService: AudioService }) {
    this.audioService = p.audioService
 
    const router = express.Router()

    router.get('/:id', this.getAudioById.bind(this))
    router.get('/:id/info', this.getAudioInfoById.bind(this))

    p.httpInstance.use(this.BASE_URL, router)
  }

  async getAudioById(req: Request, res: Response) {
    (await this.audioService.getAudioStreamById(req.params.id)).pipe(res)
  }

  async getAudioInfoById(req: Request, res: Response) {
    const audioInfo = await this.audioService.getAudioInfoById(req.params.id)
    res.send(new AudioInfoVM({
      title: audioInfo.title,
      durationInSeconds: audioInfo.durationInSeconds,
      thumbnailsUrl: audioInfo.thumbnailUrl,
    }))
  }
}