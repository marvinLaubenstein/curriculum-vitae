import { useState } from 'react'
import './Icon.css'

export function Icon() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    // Animation läuft 0.6s, danach zurück zum Ursprung
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <button
      className={`wip-icon-btn ${isAnimating ? 'wip-icon-btn--animate' : ''}`}
      onClick={handleClick}
      aria-label="Trigger animation"
    >
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </button>
  )
}
