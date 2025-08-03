import Level2 from './Level2'
import type { LevelPropsInterface } from './LevelProps.interface'
import { PropContext } from '../context/AppContext'

const Level1 = () => {
  return (
    <PropContext.Consumer>
      {
        (contextValue: LevelPropsInterface | undefined) => {
          if (!contextValue) {
            return <div>No Context Value</div>
          }

          const { value } = contextValue

          return (
            <div>
              <h2>Level 1: {value}</h2>
              <Level2 />
            </div>
          )
        }}
    </PropContext.Consumer>
  )
}

export default Level1