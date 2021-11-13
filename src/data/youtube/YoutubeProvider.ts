import { Readable } from "stream";
import ytdl from "ytdl-core";
import { IAudioProvider } from "@/domain/providers/audio/IAudioProvider";

export class YoutubeProvider implements IAudioProvider {


	async getAudioStreamById(id: string): Promise<Readable> {
		return ytdl(`http://www.youtube.com/watch?v=${id}`, {
			quality: 'highestaudio',
			filter: 'audioonly'
		})
	}

}