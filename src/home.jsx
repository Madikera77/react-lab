import React from 'react'

import Card from './card'
import List from './list'

import style from './app.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.content}>
                <Card />
                <List />
            </div>
        )
    }
}
