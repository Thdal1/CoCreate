import { Link, useParams } from 'react-router-dom'
import { useEventById } from '../services/events/use-events'
import './pages.css'

export default function EventDetailPage() {
  const { eventId } = useParams()
  const { event, status, error } = useEventById(eventId)

  if (status === 'loading') {
    return (
      <div className="stack">
        <div className="notice" role="status">
          Loading event…
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="stack">
        <div className="notice notice-error" role="alert">
          Couldn’t load event{error ? `: ${error}` : ''}.
        </div>
        <Link className="button button-secondary" to="/events">
          Back to events
        </Link>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="stack">
        <div className="notice">Event not found.</div>
        <Link className="button button-secondary" to="/events">
          Back to events
        </Link>
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="breadcrumb">
        <Link to="/events">Events</Link>
        <span aria-hidden="true">/</span>
        <span>{event.title}</span>
      </div>

      <header className="detail-header">
        <h1 className="detail-title">{event.title}</h1>
        <div className="detail-subtitle">
          <span>{event.dateLabel}</span>
          {event.time ? <span> · {event.time}</span> : null}
          <span> · {event.location}</span>
          {event.room ? <span> · {event.room}</span> : null}
        </div>
      </header>

      {event.description ? <div className="prose">{event.description}</div> : null}

      <section className="detail-grid">
        <div className="card">
          <div className="card-title">When</div>
          <div className="card-text">
            {event.dateLabel}
            {event.time ? ` · ${event.time}` : ''}
          </div>
        </div>
        <div className="card">
          <div className="card-title">Where</div>
          <div className="card-text">
            {event.location}
            {event.room ? ` · ${event.room}` : ''}
          </div>
        </div>
        <div className="card">
          <div className="card-title">Registration</div>
          <div className="card-text">
            {event.registrationUrl ? (
              <a href={event.registrationUrl} target="_blank" rel="noreferrer">
                Sign up / read more
              </a>
            ) : (
              'Details will be shared soon.'
            )}
          </div>
        </div>
      </section>

      <div className="detail-actions">
        <Link className="button button-secondary" to="/events">
          Back to events
        </Link>
        <a
          className="button button-tertiary"
          href="mailto:co-create@growthhouse.uio.no"
          title="Contact Co-Create"
        >
          Contact
        </a>
      </div>
    </div>
  )
}

