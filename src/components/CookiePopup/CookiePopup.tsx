import { useState, useEffect, useMemo, useRef } from 'react'
import './CookiePopup.css'
import { Button } from '../Button'

const COOKIE_CONSENT_KEY = 'cookie_consent'

interface CookiePopupProps {
  message?: string
}

export function CookiePopup({ message }: CookiePopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const hasConsent = useMemo(() => {
    return localStorage.getItem(COOKIE_CONSENT_KEY)
  }, [])

  useEffect(() => {
    setIsVisible(!hasConsent)
  }, [hasConsent])

  useEffect(() => {
    if (!isVisible || !containerRef.current) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisible(false)
        return
      }

      // Focus Trapping
      if (e.key === 'Tab') {
        const focusableElements = containerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>

        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]
        const activeElement = document.activeElement

        if (e.shiftKey) {
          // Shift + Tab
          if (activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab
          if (activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div ref={containerRef} className="cookie-popup" role="region" aria-label="Cookie Meldung">
      <div className="cookie-popup-content">
        <p className="cookie-popup-text">
          {message || 'Diese Website verwendet keine Cookies. Es werden keine Tracking- oder Analyse-Tools eingesetzt.'}
        </p>
        <div className="cookie-popup-actions">
          <Button 
            type="primary"
            onClick={handleAccept}
            ariaLabel="Cookie-Meldung bestätigen"
          >
            Verstanden
          </Button>
        </div>
      </div>
    </div>
  )
}
