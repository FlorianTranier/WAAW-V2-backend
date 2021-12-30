export class AudioInfoVM {
  title: string
  durationInSeconds: number
  thumbnailsUrl: string
  author: string

  constructor(p: { title: string, durationInSeconds: number, thumbnailsUrl: string, author: string }) {
    this.title = p.title
    this.durationInSeconds = p.durationInSeconds
    this.thumbnailsUrl = p.thumbnailsUrl
    this.author = p.author
  }
}