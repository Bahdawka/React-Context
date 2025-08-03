import { createContext, type Dispatch, type SetStateAction } from 'react'

export const PropContext = createContext({
  value: ''
})

interface SecondContextInterface {
  secondValue: string,
  setSecondValue: Dispatch<SetStateAction<string>>
}

export const SecondContext = createContext<SecondContextInterface>({
  secondValue: '',
  setSecondValue: (_value: string | ((prevState: string) => string)) => { }
})