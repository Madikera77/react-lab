import React from 'react'

import Card from './card'

import style from './app.css'

export default class Home extends React.Component {
    render () {
        return (
            <Card firstname='Mad' lastname='Name' age='30' />
        )
    }
}
