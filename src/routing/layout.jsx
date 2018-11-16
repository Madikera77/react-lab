import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import Styled from '../styled'

const { App } = Styled

const Layout = ({ component: Page, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <App>
          <Header />
          <Page />
          <Footer />
        </App>
      )}
    />
  )
}

export default Layout