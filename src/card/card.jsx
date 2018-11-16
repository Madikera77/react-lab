import React from 'react'
import styled from 'styled-components'

import CardButtons from './cardButtons'

import Styled from '../styled'

const { CardContent } = Styled

const Picto = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Img = styled.img`
  height: 50px;
`

const Label = styled.p`
  display: inline-flex;
  width: 80px;
  margin: 0;
`

const Card = ({ firstname, lastname, age, role, mission } = {}) => (
  <CardContent>
    <Picto>
      <Img src={mission ? "./picto-dev.png" : "./picto-attente.png"} alt="" />
    </Picto>
    <div><Label>FirstName: </Label><span>{firstname}</span></div>
    <div><Label>Name: </Label><span>{lastname}</span></div>
    <div><Label>Age: </Label><span>{age}</span></div>
    <div><Label>Role: </Label><span>{role}</span></div>
    <CardButtons />
  </CardContent>
)

export default Card
