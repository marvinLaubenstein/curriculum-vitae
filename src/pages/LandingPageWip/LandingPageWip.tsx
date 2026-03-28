import './LandingPageWip.css'
import { Button } from '../../components/Button'
import { Tooltip } from '../../components/Tooltip'
import { Icon } from '../../icons/Icon'
import { EmailIcon } from '../../icons/EmailIcon'

interface LandingPageWipProps {
  email: string
}

export function LandingPageWip({ email }: LandingPageWipProps) {
  return (
    <main className="landing-page-wip">
      <div className="landing-page-wip-content">
        <div className="landing-page-wip-label">Coming Soon</div>

        <div className="landing-page-wip-hero">
          <Icon />
          <h1 className="landing-page-wip-title">Work in Progress</h1>
        </div>

        <p className="landing-page-wip-subtitle">
          This page is under construction.
          Something new is coming soon.
        </p>

        <div className="landing-page-wip-progress">
          <div className="landing-page-wip-progress-track">
            <div className="landing-page-wip-progress-bar"></div>
          </div>
        </div>

        <p className="landing-page-wip-contact">
          Get in touch:
        </p>
        <a href={`mailto:${email}`} className="landing-page-wip-email-btn">
          <EmailIcon />
          {email}
        </a>

        <div className="landing-page-wip-divider"></div>

        <div className="landing-page-wip-social">
          <p className="landing-page-wip-social-label">Follow me</p>
          <div className="landing-page-wip-social-links">
            <Tooltip label="Instagram - coming soon">
              <Button
                type="social"
                href="#"
                ariaLabel="Instagram - coming soon"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Button>
            </Tooltip>
            <Tooltip label="LinkedIn-coming soon">
              <Button
                type="social"
                href="#"
                ariaLabel="LinkedIn - coming soon"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Button>
            </Tooltip>
            <Tooltip label="GitHub - coming soon">
              <Button
                type="social"
                href="#"
                ariaLabel="GitHub - coming soon"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  )
}
