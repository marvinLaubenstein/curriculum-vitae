import { useEffect, useRef } from 'react'
import { Button } from '../../components/Button'
import './PrivacyFooter.css'

interface PrivacyFooterProps {
  name: string
  street: string
  zip: string
  city: string
  email: string
}

export function PrivacyFooter({ name, street, zip, city, email }: PrivacyFooterProps) {
  const year = new Date().getFullYear()
  const impressumModalRef = useRef<HTMLDivElement>(null)
  const datenschutzModalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash

      if (hash === '#impressum') {
        const focusableElements = impressumModalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
        if (focusableElements?.length) {
          focusableElements[0].focus()
        }
      } else if (hash === '#datenschutz') {
        const focusableElements = datenschutzModalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
        if (focusableElements?.length) {
          focusableElements[0].focus()
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const hash = window.location.hash
      const isImpressumOpen = hash === '#impressum'
      const isDatenschutzOpen = hash === '#datenschutz'
      const isModalOpen = isImpressumOpen || isDatenschutzOpen

      if (!isModalOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        window.location.hash = ''
        return
      }

      if (e.key === 'Tab') {
        const modalRef = isImpressumOpen ? impressumModalRef : datenschutzModalRef
        const focusableElements = modalRef.current?.querySelectorAll(
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

    window.addEventListener('hashchange', handleHashChange)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <footer className="privacy-footer">
        <div className="privacy-footer-legal">
          <a href="#impressum" className="privacy-footer-impressum">Impressum</a>
          <span className="privacy-footer-divider">|</span>
          <a href="#datenschutz" className="privacy-footer-datenschutz">Datenschutzerklärung</a>
        </div>
        <p className="privacy-footer-copyright">
          © {year} — Alle Rechte vorbehalten
        </p>
      </footer>

      {/* Impressum Modal */}
      <div ref={impressumModalRef} id="impressum" className="privacy-footer-modal-overlay" role="dialog" aria-label="Impressum">
        <div className="privacy-footer-modal">
          <Button type="close" href="#" ariaLabel="Close Impressum Modal" className="privacy-footer-modal-close" onClick={() => window.location.hash = ''}>&times;</Button>
          <h2 className='privacy-footer-modal-title'>Impressum</h2>
          <div className="privacy-footer-legal-content">
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              <strong>{name}</strong><br/>
              {street}<br/>
              {zip} {city}<br/>
              Deutschland
            </p>

            <h3>Kontakt</h3>
            <p>
              E-Mail: <a href={`mailto:${email}`}>{email}</a>
            </p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              {name}<br/>
              {street}<br/>
              {zip} {city}
            </p>

            <h3>Haftungsausschluss</h3>
            <p>
              <strong>Haftung für Inhalte:</strong><br/>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
            </p>
            <p>
              <strong>Haftung für Links:</strong><br/>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>

      {/* Datenschutzerklärung Modal */}
      <div ref={datenschutzModalRef} id="datenschutz" className="privacy-footer-modal-overlay" role="dialog" aria-label="Datenschutzerklärung">
        <div className="privacy-footer-modal">
          <Button type="close" href="#" ariaLabel="Close Datenschutz Modal" className="privacy-footer-modal-close" onClick={() => window.location.hash = ''}>&times;</Button>
          <h2 className='privacy-footer-modal-title'>Datenschutzerklärung</h2>
          <div className="privacy-footer-legal-content">
            <h3>1. Datenschutz auf einen Blick</h3>
            <p>
              <strong>Allgemeine Hinweise:</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>2. Verantwortlicher</h3>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br/>
              {name}<br/>
              {street}<br/>
              {zip} {city}<br/>
              E-Mail: <a href={`mailto:${email}`}>{email}</a>
            </p>

            <h3>3. Hosting</h3>
            <p>
              Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist:<br/>
              GitHub Inc.<br/>
              88 Colin P. Kelly Jr. Street<br/>
              San Francisco, CA 94107<br/>
              USA
            </p>
            <p>
              Beim Besuch dieser Website erfasst GitHub automatisch Logfiles (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp).
            </p>
            <p>
              Die Verwendung von GitHub Pages erfolgt im Interesse einer sicheren und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:<br/>
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>
            </p>

            <h3>4. Domain-Hosting (IONOS)</h3>
            <p>
              Die Domain dieser Website wird bei folgendem Anbieter verwaltet:<br/>
              IONOS SE<br/>
              Elgendorfer Str. 57<br/>
              56410 Montabaur<br/>
              Deutschland
            </p>
            <p>
              Es kann nicht ausgeschlossen werden, dass im Rahmen der Domainverwaltung technische Zugriffsdaten verarbeitet werden.
            </p>

            <h3>5. Datenerfassung auf dieser Website</h3>

            <h4>Server-Log-Dateien</h4>
            <p>
              Der Hosting-Anbieter (GitHub) erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p>
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technisch fehlerfreier Darstellung und Sicherheit).
            </p>

            <h4>Cookies</h4>
            <p>
              Diese Website verwendet keine Cookies.
            </p>

            <h4>Kontakt per E-Mail</h4>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
            </p>
            <p>
              Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage:<br/>
              Art. 6 Abs. 1 lit. b DSGVO (sofern Ihre Anfrage mit einem Vertrag zusammenhängt)<br/>
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen)
            </p>
            <p>
              <strong>Speicherdauer:</strong><br/>
              Die Daten verbleiben bei uns, bis der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage), sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h3>6. SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            </p>

            <h3>7. Ihre Rechte</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <ul>
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p>
              Sie können eine erteilte Einwilligung jederzeit widerrufen.
            </p>

            <h3>8. Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
            </p>
            <p>
              Zuständig ist in der Regel die Datenschutzbehörde Ihres Bundeslandes.
            </p>
            <p>
              Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie unter:<br/>
              <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de</a>
            </p>

            <h3>9. Pflicht zur Bereitstellung von Daten</h3>
            <p>
              Es besteht keine gesetzliche oder vertragliche Pflicht zur Bereitstellung personenbezogener Daten. Ohne die Übermittlung bestimmter Daten (z. B. per E-Mail) können wir jedoch Ihre Anfrage nicht bearbeiten.
            </p>

            <h3>10. Stand</h3>
            <p>
              Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
