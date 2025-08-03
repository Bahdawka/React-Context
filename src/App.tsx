import { useState } from 'react'
import { PropContext, SecondContext } from './context/AppContext'
import Level1 from './components/Level1'
import Second from './components/SecondContext'

function App() {
  const propValue = 'Привіт, це PropContext via CreateContext'
  const [secondValue, setSecondValue] = useState('Second Context via CreateCOntext')

  return (
    <PropContext.Provider value={{ value: propValue }}>
      <SecondContext.Provider value={{ secondValue, setSecondValue }}>
        <div>
          <h1>React Context Example</h1>
          <Level1 />
          <Second />
        </div>
      </SecondContext.Provider>
    </PropContext.Provider>
  )
}

export default App
