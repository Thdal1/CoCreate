export type EventRecord = {
  id: string
  title: string
  date: string
  dateLabel: string
  time?: string
  location: string
  room?: string
  summary?: string
  description?: string
  registrationUrl?: string
}

export type EventsFeed = {
  updatedAt: string
  featuredEvent?: FeaturedEvent
  events: EventRecord[]
}

export type FeaturedEvent = {
  title: string
  dateLabel: string
  location: string
  organizer?: string
  url?: string
  imageUrl?: string
  note?: string
}

