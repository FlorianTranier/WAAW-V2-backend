export class AudioInfo {
  title: string
  durationInSeconds: number
  thumbnailUrl: string
  author: string

  constructor(p: { title: string, durationInSeconds: number, thumbnailUrl: string, author: string }) {
    this.title = p.title
    this.durationInSeconds = p.durationInSeconds
    this.thumbnailUrl = p.thumbnailUrl
    this.author = p.author
  }
}