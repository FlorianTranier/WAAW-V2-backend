import { Readable } from "stream"

export interface IAudioProvider {
	getAudioStreamById(id: string): Promise<Readable>
}