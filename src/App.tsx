import { useState } from 'react'
import BootSequence from './components/BootSequence'
import Terminal from './components/Terminal'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <div className="crt-container">
      <div className="crt-content">
        {!booted ? (
          <BootSequence onComplete={() => setBooted(true)} />
        ) : (
          <Terminal />
        )}
      </div>
    </div>
  )
}

export default App
