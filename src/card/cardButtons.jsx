import React from 'react'
import styled from 'styled-components'

import { Consumer } from '../context/index'

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: transparent;
  background-image: url(${({picto}) => `./picto-${picto}.png`});
  background-repeat: no-repeat;  
  background-size: cover;
  margin: 0 0 0 5px;
`

const CardButtons = () => (
  <Consumer>
    {({ edit, create, save, cancel, mode }) => {
      const {
        picto1,
        click1,
        picto2,
        click2
      } = mode === 'read' 
      ? {
        picto1: 'edit',
        click1: edit,
        picto2: 'create',
        click2: create
      }
      : {
        picto1: 'cancel',
        click1: cancel,
        picto2: 'save',
        click2: save
      }
      
      return (
        <ButtonsDiv>
          <Button type="button" picto={picto1} onClick={click1} />
          <Button type="button" picto={picto2} onClick={click2} />
        </ButtonsDiv>
      )
    }}
  </Consumer>
)

export default CardButtons
