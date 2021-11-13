import { AudioInfo } from "@/domain/models/audio/AudioInfo"
import { Readable } from "stream"

export interface IAudioProvider {
	getAudioStreamById(id: string): Promise<Readable>
	getAudioInfoById(id: string): Promise<AudioInfo>
}