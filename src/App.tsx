import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import BootSequence from './components/BootSequence'
import Terminal from './components/Terminal'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      <div className="crt-container">
        <div className="crt-content">
          {!booted ? (
            <BootSequence onComplete={() => setBooted(true)} />
          ) : (
            <Terminal />
          )}
        </div>
      </div>
      <Analytics />
    </>
  )
}

export default App
