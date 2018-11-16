import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Styled from './styled'

const { Content, Section } = Styled

const HeaderDiv = styled(Section)`
  margin: 0;
  margin-bottom: 20px;
`
const HeaderContent = styled(Content)`
  justify-content: center;
`

const Header = () => (
  <HeaderDiv>
    <HeaderContent>
      <Link to="/">
        <img
          src="http://www.siicanada.com/wp-content/uploads/2016/08/sii-canada-logo-website-72x110.png"
          alt="SII Canada Logo"
        />
      </Link>
    </HeaderContent>
  </HeaderDiv>
)

export default Header