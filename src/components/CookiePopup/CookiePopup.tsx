import { useState, useEffect } from 'react'
import './CookiePopup.css'

const COOKIE_CONSENT_KEY = 'cookie_consent'

interface CookiePopupProps {
  message?: string
}

export function CookiePopup({ message }: CookiePopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    setIsVisible(!consent)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-popup">
      <p className="cookie-popup-text">
        {message || 'Diese Website verwendet keine Cookies. Es werden keine Tracking- oder Analyse-Tools eingesetzt.'}
      </p>
      <div className="cookie-popup-actions">
        <button onClick={handleAccept} className="cookie-popup-btn cookie-popup-btn-accept">
          Verstanden
        </button>
        <button onClick={handleDecline} className="cookie-popup-btn cookie-popup-btn-decline">
          Ablehnen
        </button>
      </div>
    </div>
  )
}
