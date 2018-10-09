import React from 'react'
import {Link} from 'react-router-dom'

import style from './app.css'

export default class Footer extends React.Component {
    render () {
        return (
            <div className={style.footer}>
                <div>© SII CANADA. Tous droits réservés.</div>
                <Link to="/about">
                    About
                </Link>
            </div>
        )
    }
}
