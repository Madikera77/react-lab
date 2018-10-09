import React from 'react'

import style from './app.css'
import { Consumer } from './context';

export default class Card extends React.Component {
    render() {
        return (
            <Consumer>
                {({ contacts, selected, next, previous, company }) => {
                    const { firstname, lastname, age, role, mission } = contacts[selected]
                    return <div className={style.card}>
                        <div className={style.border}>
                            <div className={style.picto}>
                                <img src={mission ? "./picto-dev.png" : "./picto-attente.png"} alt="" />
                            </div>
                            <div>FirstName: {firstname}</div>
                            <div>Name: {lastname}</div>
                            <div>Age: {age}</div>
                            <div>Role: {role}</div>
                            <div>Company: {company}</div>
                        </div>
                        <div className={style.buttons}>
                            <button onClick={previous}>Previous</button>
                            <button onClick={next}>Next</button>
                        </div>
                    </div>
                }}
            </Consumer>
        )
    }
}
