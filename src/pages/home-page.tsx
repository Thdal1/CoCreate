import { Link } from 'react-router-dom'
import { useEvents } from '../services/events/use-events'
import './pages.css'

export default function HomePage() {
  const { featuredEvent } = useEvents()

  return (
    <div className="stack">
      <section className="hero hero-split">
        <div className="hero-copy">
          <div className="hero-eyebrow">UiO Growth House · Student innovation</div>
          <h1 className="hero-title">Co-Create Oslo</h1>
          <p className="hero-lede">
            A collaboration where UiO, BI, OsloMet, and Kristiania combine resources and networks
            to create a more unified offering for entrepreneurial students.
          </p>

          <div className="hero-actions">
            <Link className="button button-secondary" to="/events">
              See upcoming events
            </Link>
            <a
              className="button button-primary"
              href="https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/"
              target="_blank"
              rel="noreferrer"
            >
              Read about Co-Create
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/"
              target="_blank"
              rel="noreferrer"
            >
              Read the official UiO page
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Image placeholder">
          <div className="media-placeholder">
            <div className="media-badge">Photo placeholder</div>
            <div className="media-caption">Add a workshop / campus photo later.</div>
          </div>
        </div>
      </section>

      <section className="featured" aria-label="Featured event">
        <div className="featured-inner">
          <div className="featured-media">
            <div className="media-placeholder">
              <div className="media-badge">Featured</div>
              <div className="media-caption">Add a featured event image later.</div>
            </div>
          </div>
          <div className="featured-body">
            <div className="featured-kicker">Featured event</div>
            <h2 className="featured-title">{featuredEvent?.title ?? 'Featured event'}</h2>
            <div className="featured-meta">
              <span>{featuredEvent?.dateLabel ?? 'Date · time'}</span>
              <span aria-hidden="true"> · </span>
              <span>{featuredEvent?.location ?? 'Location'}</span>
              {featuredEvent?.organizer ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <span>{featuredEvent.organizer}</span>
                </>
              ) : null}
            </div>
            {featuredEvent?.note ? <p className="featured-note">{featuredEvent.note}</p> : null}
            <div className="featured-actions">
              {featuredEvent?.url ? (
                <a
                  className="button button-primary"
                  href={featuredEvent.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View details
                </a>
              ) : (
                <span className="button button-tertiary" aria-disabled="true">
                  Add a link in `events.json`
                </span>
              )}
              <Link className="button button-secondary" to="/events">
                Browse Co-Create events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">A place to start</h2>
          <p className="section-subtitle">
            Come alone or with friends—ideas or no ideas. You’re welcome.
          </p>
        </div>

        <div className="two-col">
          <div className="card">
            <div className="card-title">Get in touch</div>
            <p className="card-text">
              Curious about entrepreneurship or building something with others? Send us a short
              message and we’ll help you find the right next step.
            </p>
            <div className="card-actions">
              <a className="button button-primary" href="mailto:co-create@growthhouse.uio.no">
                Email Co-Create
              </a>
              <a
                className="button button-tertiary"
                href="https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/"
                target="_blank"
                rel="noreferrer"
              >
                What is Co-Create?
              </a>
            </div>
          </div>

          <div className="stat-panel">
            <div className="stat-grid">
              <div className="stat">
                <div className="stat-value">0+</div>
                <div className="stat-label">Students reached</div>
              </div>
              <div className="stat">
                <div className="stat-value">0+</div>
                <div className="stat-label">Workshops &amp; lectures</div>
              </div>
              <div className="stat">
                <div className="stat-value">0+</div>
                <div className="stat-label">Mentors &amp; facilitators</div>
              </div>
              <div className="stat">
                <div className="stat-value">0+</div>
                <div className="stat-label">Campus partners</div>
              </div>
            </div>
            <div className="stat-note">
              Replace these numbers when you have real stats.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">What you’ll find here</h2>
          <p className="section-subtitle">Practical tools, friendly people, and forward motion.</p>
        </div>

        <div className="grid-3">
          <div className="icon-card">
            <div className="icon">Mentoring</div>
            <div className="card-title">Guidance &amp; sparring</div>
            <p className="card-text">
              Get help to shape your idea, test assumptions, and plan your next steps.
            </p>
          </div>
          <div className="icon-card">
            <div className="icon">Events</div>
            <div className="card-title">Events &amp; community</div>
            <p className="card-text">
              Workshops and lectures that connect you with students from across Oslo.
            </p>
          </div>
          <div className="icon-card">
            <div className="icon">Funding</div>
            <div className="card-title">Opportunities &amp; ecosystem</div>
            <p className="card-text">
              Learn what programmes exist, who to talk to, and where to go next.
            </p>
          </div>
        </div>

        <div className="inline-cta">
          <Link className="button button-secondary" to="/events">
            Browse events
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Inside Co-Create</h2>
          <p className="section-subtitle">
            A glimpse of what happens when students meet to work on real problems.
          </p>
        </div>

        <div className="story">
          <div className="story-prose">
            <p className="card-text story-lede">
              Co-Create is a year-long student innovation programme focused on transforming big
              ideas into real solutions for real societal challenges—open to students across UiO,
              BI, OsloMet, Kristiania (and more).
            </p>

            <div className="quote">
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <div className="quote-body">
                We want the programme to be a combination of input and working and testing
                solutions yourself.
              </div>
              <div className="quote-meta">
                Adapted from{' '}
                <a
                  href="https://www.forskningsparken.no/news/co-create-kreativ-studentinnovasjon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forskningsparken: Co-Create: Kreativ studentinnovasjon
                </a>
              </div>
            </div>

            <div className="story-bullets">
              <div className="card">
                <div className="card-title">Design thinking week</div>
                <p className="card-text">
                  Students work in groups, build personas, map problems, and iterate towards
                  solutions—together.
                </p>
              </div>
              <div className="card">
                <div className="card-title">Activity throughout the year</div>
                <p className="card-text">
                  From “dark horse” idea events to dinners, talks, demo days, and pitch nights.
                </p>
              </div>
            </div>

            <div className="inline-cta">
              <a
                className="button button-tertiary"
                href="https://www.forskningsparken.no/news/co-create-kreativ-studentinnovasjon"
                target="_blank"
                rel="noreferrer"
              >
                Read the full article
              </a>
            </div>
          </div>

          <div className="story-media" aria-label="Photo placeholders">
            <div className="media-grid">
              <div className="media-placeholder media-tall">
                <div className="media-badge">Photo placeholder</div>
                <div className="media-caption">Workshop moments (replace later).</div>
              </div>
              <div className="media-placeholder">
                <div className="media-badge">Photo placeholder</div>
                <div className="media-caption">Post-its, teams, and prototyping.</div>
              </div>
              <div className="media-placeholder">
                <div className="media-badge">Photo placeholder</div>
                <div className="media-caption">Community space at Forskningsparken.</div>
              </div>
            </div>
            <div className="media-credit">
              Article credits photo to Angelique Culvin (add the actual images when you have the
              files/links).
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Partners</h2>
          <p className="section-subtitle">Replace placeholders with logos later.</p>
        </div>

        <div className="logo-strip" aria-label="Partner logos placeholders">
          <div className="logo-placeholder">UiO</div>
          <div className="logo-placeholder">BI</div>
          <div className="logo-placeholder">OsloMet</div>
          <div className="logo-placeholder">Kristiania</div>
        </div>
      </section>

      <section className="callout callout-strong">
        <div className="callout-inner">
          <div>
            <div className="callout-title">Any questions?</div>
            <div className="callout-text">
              Whether you’re looking for guidance, collaboration, or just a place to start—we’d be
              happy to hear from you.
            </div>
          </div>
          <a className="button button-primary" href="mailto:co-create@growthhouse.uio.no">
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}

