import React from 'react'

import { Consumer } from './context';

import style from './app.css'

export default class List extends React.Component {
    
    displayName({ firstname, lastname }) {
        return `${firstname.charAt(0).toUpperCase()}${firstname.substring(1).toLowerCase()} ${lastname.toUpperCase()}`
    }

    render() {
        return (
            <Consumer>
                {({ contacts, selected, select }) => <div className={style.border}>
                    <ul>
                        {contacts.map((p, i) =>
                            <li key={i} onClick={() => select(i)} className={selected === i ? style.selected : ""} >{this.displayName(p)}</li>
                        )}
                    </ul>
                </div>}
            </Consumer>
        )
    }
}
