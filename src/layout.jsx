import React from 'react'
import {Route} from 'react-router-dom'

import Header from './header'

import style from './app.css'
 
export default function Layout ({component: Page, ...rest}) {
    return (
        <Route {...rest} render={() => (
            <div className={style.app}>
                <Header />
                <Page />
            </div>
        )} />
    )
};