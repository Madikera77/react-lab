import React from 'react'

import { Consumer } from '../context/index'
import Card from './card'
import CardForm from './cardForm'

const ConsultantCard = () => (
  <Consumer>
    {({ consultants, updated, selected, onChange, mode }) => {
      const consultant = consultants[selected]
      return (
        mode === 'read'
          ? <Card {...consultant} />
          : <CardForm {...{ ...updated, mode, onChange }} />
      )
    }}
  </Consumer>
)

export default ConsultantCard
