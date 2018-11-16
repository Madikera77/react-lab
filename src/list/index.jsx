import React from 'react'
import styled from 'styled-components'

import Dropbox from './dropbox'
import { Consumer } from '../context/index'

const ListContent = styled.div`
  border: 1px solid lightblue;
  padding: 20px;
  border-radius: 25px;
`

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  &:hover {
    color: blue;
    cursor: pointer;
  }
  ${({ selected }) =>
    selected ? `
      background-color: violet;
      border-radius: 25px;
    `: ``
  }
`

const Delete = styled.img`
  height: 20px;
  margin-left: 5px;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: max-content;
`

const displayName = ({ firstname, lastname }) =>
  `${firstname.charAt(0).toUpperCase()}${firstname.substring(1).toLowerCase()} ${lastname.toUpperCase()}`


const List = () => (
  <Consumer>
    {({ consultants, selected, select, mode, deleteConsultant }) => (
      <ListContent>
        <Dropbox />
        <Ul>
          {consultants.map((p, i) => (
            <Li key={i} onClick={() => select(i)} selected={selected === i}>
              <span>{displayName(p)}</span>
              {(mode === 'edit' && selected === i) ? <Delete src='./picto-trash.png' onClick={deleteConsultant} /> : null}
            </Li>
          ))}
        </Ul>
      </ListContent>
    )}
  </Consumer>
)

export default List