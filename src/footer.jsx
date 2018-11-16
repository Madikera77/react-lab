import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Styled from './styled'

const { Content, Section } = Styled

const FooterDiv = styled(Section)`
  background-color: #242830;
`
const FooterContent = styled(Content)`
  justify-content: space-between;
`
const Copyright = styled.p`
    color: #8c9398;
    word-spacing: 1px;
    line-height: 25px;
    font-size: 14px;
`

const Footer = () => (
  <FooterDiv>
    <FooterContent>
      <Copyright>© SII CANADA. Tous droits réservés.</Copyright>
      <Link to="/about">About</Link>
    </FooterContent>
  </FooterDiv>
)

export default Footer