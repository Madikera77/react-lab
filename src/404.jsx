import React from 'react'

import style from './app.css'

export default class Page404 extends React.Component {
    render () {
        return (
            <div className={style.errorMessage}>404</div>
        )
    }
}
