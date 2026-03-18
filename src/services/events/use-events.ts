import { useEffect, useMemo, useState } from 'react'
import type { EventRecord, EventsFeed, FeaturedEvent } from './types'

type LoadStatus = 'loading' | 'ready' | 'error'

const FALLBACK_EVENTS: EventRecord[] = [
  {
    id: 'hackathon-weekend-2026',
    title: 'Hackathon Weekend 2026',
    date: '2026-03-20',
    dateLabel: '20 Mar – 22 Mar 2026',
    time: '17:00 – 16:00',
    location: 'Oslo',
    summary:
      'An opportunity to test your knowledge by solving solutions for real-life stakeholders.',
    description:
      'Join a weekend hackathon where cross-disciplinary teams work on challenges from real stakeholders. Bring curiosity and a willingness to collaborate—mentors and facilitation will be available throughout the weekend.',
    registrationUrl:
      'https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/',
  },
  {
    id: 'lecture-series-opportunity-evaluation',
    title: 'Lecture series: Opportunity Evaluation',
    date: '2026-03-25',
    dateLabel: '25 Mar 2026',
    time: '14:00 – 16:00',
    location: 'UiO, Kristen Nygårds Hus',
    room: 'Seminarrom Python',
    summary: 'Learn frameworks for evaluating opportunities and shaping your next steps.',
    description:
      'A lecture for students exploring entrepreneurship. We’ll cover practical lenses for opportunity evaluation and how to iterate from early signals to clearer direction.',
    registrationUrl:
      'https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/',
  },
]

function safeParseFeed(payload: unknown): EventsFeed | null {
  if (!payload || typeof payload !== 'object') return null
  const obj = payload as Partial<EventsFeed>
  if (!Array.isArray(obj.events)) return null
  if (typeof obj.updatedAt !== 'string') return null

  const featured =
    obj.featuredEvent && typeof obj.featuredEvent === 'object'
      ? (obj.featuredEvent as Partial<FeaturedEvent>)
      : null

  const featuredEvent: FeaturedEvent | undefined =
    featured && typeof featured.title === 'string' && typeof featured.dateLabel === 'string'
      ? {
          title: featured.title,
          dateLabel: featured.dateLabel,
          location: typeof featured.location === 'string' ? featured.location : '',
          organizer: typeof featured.organizer === 'string' ? featured.organizer : undefined,
          url: typeof featured.url === 'string' ? featured.url : undefined,
          imageUrl: typeof featured.imageUrl === 'string' ? featured.imageUrl : undefined,
          note: typeof featured.note === 'string' ? featured.note : undefined,
        }
      : undefined

  const events: EventRecord[] = obj.events
    .filter((e): e is EventRecord => !!e && typeof (e as any).id === 'string')
    .map((e: any) => ({
      id: String(e.id),
      title: String(e.title ?? ''),
      date: String(e.date ?? ''),
      dateLabel: String(e.dateLabel ?? e.date ?? ''),
      time: typeof e.time === 'string' ? e.time : undefined,
      location: String(e.location ?? ''),
      room: typeof e.room === 'string' ? e.room : undefined,
      summary: typeof e.summary === 'string' ? e.summary : undefined,
      description: typeof e.description === 'string' ? e.description : undefined,
      registrationUrl: typeof e.registrationUrl === 'string' ? e.registrationUrl : undefined,
    }))
    .filter((e) => e.title && e.dateLabel && e.location)

  return { updatedAt: obj.updatedAt, featuredEvent, events }
}

async function loadEventsFeed(signal: AbortSignal): Promise<EventsFeed> {
  const res = await fetch('/events.json', {
    signal,
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }

  const json = (await res.json()) as unknown
  const parsed = safeParseFeed(json)
  if (!parsed) throw new Error('Invalid events feed')
  return parsed
}

function sortEvents(events: EventRecord[]): EventRecord[] {
  return [...events].sort((a, b) => (a.date || '').localeCompare(b.date || ''))
}

export function useEvents() {
  const [status, setStatus] = useState<LoadStatus>('loading')
  const [events, setEvents] = useState<EventRecord[]>([])
  const [featuredEvent, setFeaturedEvent] = useState<FeaturedEvent | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    ;(async () => {
      try {
        setStatus('loading')
        setError(null)
        const feed = await loadEventsFeed(controller.signal)
        if (!active) return
        setEvents(sortEvents(feed.events))
        setFeaturedEvent(feed.featuredEvent ?? null)
        setStatus('ready')
      } catch (e: any) {
        if (!active) return
        setEvents(sortEvents(FALLBACK_EVENTS))
        setFeaturedEvent(null)
        setError(e?.message ? String(e.message) : 'Unknown error')
        setStatus('error')
      }
    })()

    return () => {
      active = false
      controller.abort()
    }
  }, [])

  return { status, events, featuredEvent, error }
}

export function useEventById(eventId: string | undefined) {
  const { status, events, error } = useEvents()

  const event = useMemo(() => {
    if (!eventId) return null
    return events.find((e) => e.id === eventId) ?? null
  }, [events, eventId])

  const detailStatus: LoadStatus = status === 'loading' ? 'loading' : 'ready'
  const detailError = error

  return { status: detailStatus, event, error: detailError }
}

