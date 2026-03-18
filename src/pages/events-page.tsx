import { Link } from 'react-router-dom'
import { useEvents } from '../services/events/use-events'
import './pages.css'

export default function EventsPage() {
  const { events, status, error } = useEvents()

  return (
    <div className="stack">
      <header className="page-header">
        <h1 className="page-title">Events</h1>
        <p className="page-subtitle">
          Upcoming lectures, workshops, and community events from Co-Create Oslo.
        </p>
      </header>

      {status === 'loading' && (
        <div className="notice" role="status">
          Loading events…
        </div>
      )}

      {status === 'error' && (
        <div className="notice notice-error" role="alert">
          Couldn’t load events{error ? `: ${error}` : ''}.
        </div>
      )}

      {status === 'ready' && events.length === 0 && (
        <div className="notice">No events published yet.</div>
      )}

      {events.length > 0 && (
        <div className="event-list">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-meta">
                <div className="event-date">{event.dateLabel}</div>
                {event.time ? <div className="event-time">{event.time}</div> : null}
              </div>
              <div className="event-body">
                <h2 className="event-title">
                  <Link to={`/events/${encodeURIComponent(event.id)}`} className="event-link">
                    {event.title}
                  </Link>
                </h2>
                <div className="event-location">
                  {event.location}
                  {event.room ? ` · ${event.room}` : ''}
                </div>
                {event.summary ? <p className="event-summary">{event.summary}</p> : null}
              </div>
              <div className="event-actions">
                <Link className="button button-small" to={`/events/${encodeURIComponent(event.id)}`}>
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

