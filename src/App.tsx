import './App.css'
import { PrivacyFooter } from './components/PrivacyFooter'
import { CookiePopup } from './components/CookiePopup'

const name = import.meta.env.VITE_NAME || 'Name'
const street = import.meta.env.VITE_STREET || 'Straße'
const zip = import.meta.env.VITE_ZIP || 'PLZ'
const city = import.meta.env.VITE_CITY || 'Stadt'
const email = import.meta.env.VITE_EMAIL || 'email@example.com'

function App() {
  return (
    <main className="wip-page">
      <div className="wip-content">
        <div className="wip-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h1>Work in Progress</h1>
        <p className="wip-subtitle">
          Diese Seite befindet sich im Aufbau.<br/>
          Bald finden Sie hier etwas Neues.
        </p>
        <div className="wip-progress">
          <div className="wip-progress-bar"></div>
        </div>
        <p className="wip-contact">
          Bei Fragen erreichen Sie mich unter:<br/>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>

      <PrivacyFooter name={name} street={street} zip={zip} city={city} email={email}></PrivacyFooter>

      <CookiePopup />
    </main>
  )
}

export default App
