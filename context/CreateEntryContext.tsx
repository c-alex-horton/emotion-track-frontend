import React, { createContext } from 'react'

type defaultValue = {
  [key: string]: any
}

export const CreateEntryContext = createContext<defaultValue | undefined>(
  undefined
)

type Props = { children: React.ReactNode }

export const CreaeEntryProvider = ({ children }: Props) => {
  return (
    <CreateEntryContext.Provider value={{ defaultValue: 'butt' }}>
      {children}
    </CreateEntryContext.Provider>
  )
}
