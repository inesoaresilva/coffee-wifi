import { Image } from './image'

export interface Cafe {
  name: string
  slug: string
  images: Image[]
  neighbourhood: string
  googleMapsUrl: string
  wifi: {
    speed: string
    uploadSpeed: string
    downloadSpeed: string
  }
  socketsAvailable: string
  noiseLevel: string
  comfort: string
  light: string
  tags: string[]
  pricePoint: number
  lastVisit: string
  review: string
}
