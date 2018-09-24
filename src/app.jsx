import React from 'react'

import Header from './header'
import Card from './card'

import style from './app.css'

export default class App extends React.Component {
    render () {
        return (
            <div className={style.app}>
                <Header />
                <Card firstname='Mad' lastname='Name' age='30' />
            </div>
        )
    }
}
