import React from 'react'
import styled from 'styled-components'

import ConsultantCard from './card/consultantCard'
import List from './list'
import Styled from './styled'

const { Colors: { bluegrey }, Content, Section } = Styled

const HomeSection = styled(Section)`
  background: ${bluegrey};
`
const HomeContent = styled(Content)`
  justify-content: space-between;
  line-height: 1.4;
`
const CardStyled = styled(ConsultantCard)`
  width: 60%;
`
const ListStyled = styled(List)`
  width: 40%;
`
const Home = () => {
  return (
    <HomeSection>
      <HomeContent>
        <CardStyled />
        <ListStyled />
      </HomeContent>
    </HomeSection>
  )
}

export default Home