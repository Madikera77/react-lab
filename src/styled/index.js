import styled from 'styled-components'

const Colors = {
  bluegrey: '#f3f5f8',
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Section = styled.div`
  width: 100%;
  padding: 40px 0 30px;
`
const Content = styled.div`  
  display: flex;
  flex-direction: row; 
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1200px) {
      width: 1170px;
  }

  @media (min-width: 992px) {
      width: 970px;
  }
  
  @media (min-width: 768px) {
      width: 750px;
  }
`
const CardContent = styled.div`
  width: 100%;
  padding: 20px 20px 0 0;
`


const Styled = {
  Colors,
  App,
  Section,
  Content,
  CardContent
}

export default Styled