import React from 'react'
import styled from 'styled-components'

import { Consumer } from '../context/index'

const Select = styled.select`
  width: 100%;
  border-radius: 25px;
  margin-bottom: 5px;
`

const Dropbox = () => (
  <Consumer>
    {({ onSort }) => (
      <Select onChange={onSort}>
        <option value='lastname'>Lastname</option>
        <option value='firstname'>Firstname</option>
        <option value='age'>Age</option>
        <option value='role'>Role</option>
        <option value='mission'>Mission</option>
      </Select>
    )}
  </Consumer>
)

export default Dropbox