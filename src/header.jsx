import React from 'react'

import style from './app.css'

export default class Header extends React.Component {
    render () {
        return (
            <div className={style.header}>
                <img 
                    src="http://www.siicanada.com/wp-content/uploads/2016/08/sii-canada-logo-website-72x110.png"
                    alt="SII Canada Logo">
                </img>
            </div>
        )
    }
}
