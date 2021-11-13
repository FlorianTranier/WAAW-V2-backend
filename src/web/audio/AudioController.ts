import { AudioService } from '@/domain/services/audio/AudioService';
import express, { Request, Response } from 'express'

export class AudioController {

	private readonly audioService: AudioService

	BASE_URL = '/audio'

	constructor(p: { httpInstance: express.Application, audioService: AudioService }) {
		this.audioService = p.audioService

		const router = express.Router()

		router.get(`/:id`, this.getAudioById.bind(this))

		p.httpInstance.use(this.BASE_URL, router)
	}

	async getAudioById(req: Request, res: Response) {
		(await this.audioService.getAudioStreamById(req.params.id)).pipe(res)
	}

}