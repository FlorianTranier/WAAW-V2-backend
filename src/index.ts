import { YoutubeProvider } from './data/youtube/YoutubeProvider'
import express from 'express'
import { AudioService } from './domain/services/audio/AudioService'
import { AudioController } from './web/audio/AudioController'

const app = express()

// dependencies
// providers
const audioProvider = new YoutubeProvider()

// services
const audioService = new AudioService({
  audioProvider: audioProvider
})

// controllers
new AudioController({
  httpInstance: app,
  audioService: audioService
})

// eslint-disable-next-line no-console
app.listen(8080, () => {console.log('listening port 8080') })

