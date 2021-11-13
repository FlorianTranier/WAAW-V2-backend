export class AudioInfo {
  title: string
  durationInSeconds: number
  thumbnailUrl: string

  constructor(p: { title: string, durationInSeconds: number, thumbnailUrl: string }) {
    this.title = p.title
    this.durationInSeconds = p.durationInSeconds
    this.thumbnailUrl = p.thumbnailUrl
  }
}