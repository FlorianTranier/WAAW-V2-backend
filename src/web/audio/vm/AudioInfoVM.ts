export class AudioInfoVM {
  title: string
  durationInSeconds: number
  thumbnailsUrl: string

  constructor(p: { title: string, durationInSeconds: number, thumbnailsUrl: string }) {
    this.title = p.title
    this.durationInSeconds = p.durationInSeconds
    this.thumbnailsUrl = p.thumbnailsUrl
  }
}