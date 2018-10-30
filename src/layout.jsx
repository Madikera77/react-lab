import React from 'react'
import { Route } from 'react-router-dom'

import Header from './header'
import Footer from './footer'

import style from './app.css'

export default function Layout({ component: Page, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (
        <div className={style.app}>
          <Header />
          <Page />
          <Footer />
        </div>
      )}
    />
  )
}