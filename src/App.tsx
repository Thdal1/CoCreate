import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/site-layout.tsx'
import HomePage from './pages/home-page.tsx'
import EventsPage from './pages/events-page.tsx'
import EventDetailPage from './pages/event-detail-page.tsx'



function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )


  
}

export default App
