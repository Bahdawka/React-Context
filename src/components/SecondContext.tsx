import { SecondContext } from '../context/AppContext'
import { useContext } from 'react'

const Second = () => {
  const { secondValue, setSecondValue } = useContext(SecondContext)

  return (
    <div>
      <h2>Second: {secondValue}</h2>
      <button onClick={() => setSecondValue('Updated in Second Component Second Context via CreateContext')}>
        Second Value
      </button>
    </div>
  )

}

export default Second