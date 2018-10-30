import React from 'react'

const defaultValue = {
  contacts: [],
  selected: 0,
  company: 'SII CANADA',
  select: () => { },
  next: () => { },
  previous: () => { }
}

export const { Provider, Consumer } = React.createContext(defaultValue)
