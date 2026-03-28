import { PrivacyFooter } from './sections/PrivacyFooter'
import { CookiePopup } from './sections/CookiePopup'
import { LandingPageWip } from './pages/LandingPageWip'

const name = import.meta.env.VITE_NAME || 'Name'
const street = import.meta.env.VITE_STREET || 'Street'
const zip = import.meta.env.VITE_ZIP || 'ZIP'
const city = import.meta.env.VITE_CITY || 'City'
const email = import.meta.env.VITE_EMAIL || 'email@example.com'

function App() {
  return (
    <>
      <LandingPageWip email={email} />
      <PrivacyFooter name={name} street={street} zip={zip} city={city} email={email} />
      <CookiePopup />
    </>
  )
}

export default App
