import React from 'react'

import catalogue from './catalogue'

import style from './app.css'

export default class Card extends React.Component {
    constructor () {
        super()
        this.state = {
            company: "SII CANADA",
            cardNb: 0
        }

        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    componentWillMount () {
        const list = catalogue
        this.setState({ list })
    }

    next () {
        this.setState({cardNb : (this.state.cardNb + 1) % this.state.list.length})
    }

    previous () {
        this.setState({cardNb : this.state.cardNb - 1 < 0 ? this.state.list.length -1 : this.state.cardNb - 1})
    }

    render () {
        const {firstname, lastname, age, role} = this.state.list[this.state.cardNb]
        return (
            <div>
                <div className={style.card}>
                    <div>FirstName: {firstname}</div>
                    <div>Name: {lastname}</div>
                    <div>Age: {age}</div>
                    <div>Role: {role}</div>
                    <div>Company: {this.state.company}</div>
                </div>
                <div className={style.buttons}>
                    <button onClick={this.previous}>Previous</button>
                    <button onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}
