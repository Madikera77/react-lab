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

const Label = styled.label`
  display: inline-flex;
  width: 80px;
  margin: 0;
`

const Input = styled.input`
  width: 300px;
`

const CardForm = ({ firstname = '', lastname = '', age = '', role = '', mission = false, onChange } = {}) => (
  <CardContent>
    <form>
      <Picto>
        <Img src={mission ? "./picto-dev.png" : "./picto-attente.png"} alt="" onClick={() => onChange({ target: { name: 'mission', value: !mission } })} />
      </Picto>
      <div>
        <Label htmlFor='firstname'>FirstName: </Label>
        <Input type='text' id='firstname' name='firstname' value={firstname} onChange={onChange} />
      </div>
      <div>
        <Label htmlFor='lastname'>Name: </Label>
        <Input id='lastname' name='lastname' value={lastname} onChange={onChange} />
      </div>
      <div>
        <Label htmlFor='age'>Age: </Label>
        <Input id='age' name='age' value={age} onChange={onChange} />
      </div>
      <div>
        <Label htmlFor='role'>Role: </Label>
        <Input id='role' name='role' value={role} onChange={onChange} />
      </div>
    </form>
    <CardButtons />
  </CardContent>
)

export default CardForm