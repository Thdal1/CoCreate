import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Data from './data/test.json'
import App from './App.tsx'
import Banner from './components/event-banner/event-banner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    <Banner data={Data} />
  </StrictMode>,
)
