import { NavLink, Outlet } from 'react-router-dom'
import './site-layout.css'

export default function SiteLayout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <NavLink to="/" className="brand-link" aria-label="Co-Create home">
              <span className="brand-mark" aria-hidden="true">
                Co
              </span>
              <span className="brand-name">Co-Create Oslo</span>
            </NavLink>
            <div className="brand-subtitle">
              Student innovation across UiO, BI, OsloMet &amp; Kristiania
            </div>
          </div>

          <nav className="nav">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
            <a
              className="nav-link nav-link-external"
              href="https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/"
              target="_blank"
              rel="noreferrer"
            >
              UiO page
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-title">Contact</div>
            <a className="footer-link" href="mailto:co-create@growthhouse.uio.no">
              co-create@growthhouse.uio.no
            </a>
          </div>
          <div className="footer-right">
            <a
              className="footer-link"
              href="https://www.uio.no/english/research/interfaculty-research-areas/growth-house/student-innovation/co-create/"
              target="_blank"
              rel="noreferrer"
            >
              Learn more on UiO Growth House
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

