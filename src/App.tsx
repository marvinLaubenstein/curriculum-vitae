import './App.css'

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

      <footer className="wip-footer">
        <div className="wip-legal">
          <a href="#impressum">Impressum</a>
          <span className="wip-divider">|</span>
          <a href="#datenschutz">Datenschutzerklärung</a>
        </div>
        <p className="wip-copyright">
          © {new Date().getFullYear()} — Alle Rechte vorbehalten
        </p>
      </footer>

      {/* Impressum Modal/Section */}
      <div id="impressum" className="wip-modal-overlay">
        <div className="wip-modal">
          <a href="#" className="wip-modal-close">&times;</a>
          <h2>Impressum</h2>
          <div className="wip-legal-content">
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
              Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p>
              <strong>Haftung für Links:</strong><br/>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>

      {/* Datenschutzerklärung Modal/Section */}
      <div id="datenschutz" className="wip-modal-overlay">
        <div className="wip-modal">
          <a href="#" className="wip-modal-close">&times;</a>
          <h2>Datenschutzerklärung</h2>
          <div className="wip-legal-content">
            <h3>1. Datenschutz auf einen Blick</h3>
            <p>
              <strong>Allgemeine Hinweise:</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>

            <h3>2. Allgemeine Informationen und Pflichtangaben</h3>

            <h4>Verantwortlicher</h4>
            <p>
              Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist:<br/>
              {name}<br/>
              {street}<br/>
              {zip} {city}<br/>
              E-Mail: <a href={`mailto:${email}`}>{email}</a>
            </p>

            <h4>Hosting</h4>
            <p>
              Diese Website wird bei einem externen Hosting-Anbieter gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>

            <h3>3. Datenerfassung auf dieser Website</h3>

            <h4>Cookies</h4>
            <p>
              Diese Website verwendet keine Cookies. Es werden keine Tracking- oder Analyse-Tools eingesetzt.
            </p>

            <h4>Kontaktformular / E-Mail-Kontakt</h4>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten personenbezogenen Daten (z.B. Ihre E-Mail-Adresse und ggf. Ihr Name) gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h3>4. Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über die bezüglich Ihrer Person gespeicherten Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Sie haben zudem das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Für alle Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h3>5. Beschwerderecht</h3>
            <p>
              Wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt, haben Sie das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            </p>
            <p>
              Zuständige Aufsichtsbehörde für Deutschland:<br/>
              Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit<br/>
              Husarenstraße 30<br/>
              53117 Bonn
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
