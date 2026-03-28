import './App.css'
import { PrivacyFooter } from './components/PrivacyFooter'
import { CookiePopup } from './components/CookiePopup'
import { Button } from './components/Button'
import { Icon } from './components/Icon'
import { EmailIcon } from './components/EmailIcon'

const name = import.meta.env.VITE_NAME || 'Name'
const street = import.meta.env.VITE_STREET || 'Street'
const zip = import.meta.env.VITE_ZIP || 'ZIP'
const city = import.meta.env.VITE_CITY || 'City'
const email = import.meta.env.VITE_EMAIL || 'email@example.com'

function App() {
  return (
    <main className="wip-page">
      <div className="wip-content">
        <div className="wip-label">Coming Soon</div>

        <div className="wip-hero">
          <Icon />
          <h1 className="wip-title">Work in Progress</h1>
        </div>

        <p className="wip-subtitle">
          This page is under construction.<br/>
          Something new is coming soon.
        </p>

        <div className="wip-progress">
          <div className="wip-progress-track">
            <div className="wip-progress-bar"></div>
          </div>
        </div>

        <p className="wip-contact">
          Get in touch:
        </p>
        <a href={`mailto:${email}`} className="wip-email-btn">
          <EmailIcon />
          {email}
        </a>

        <div className="wip-divider"></div>

        <div className="wip-social">
          <p className="wip-social-label">Follow me</p>
          <div className="wip-social-links">
            <Button 
              type="social"
              href="#"
              ariaLabel="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Button>
            <Button 
              type="social"
              href="#"
              ariaLabel="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </Button>
            <Button 
              type="social"
              href="#"
              ariaLabel="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <PrivacyFooter name={name} street={street} zip={zip} city={city} email={email}></PrivacyFooter>

      <CookiePopup />
    </main>
  )
}

export default App
