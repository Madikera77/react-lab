import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { Provider } from './context'
import Layout from './layout'
import Home from './home'
import About from './about'
import Page404 from './404'
import catalogue from './catalogue'

export default class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.select = this.select.bind(this)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = {
            contacts: catalogue,
            selected: 0,
            select: this.select,
            company: "SII CANADA",
            next: this.next,
            previous: this.previous
        }
    }

    select(selection) {
        this.setState({
            selected: selection
        })
    }
    next() {
        this.setState({
            selected: (this.state.selected + 1) % this.state.contacts.length
        })
    }
    previous() {
        const s = this.state.selected - 1
        const selected = s < 0 ? (this.state.contacts.length - 1) : s
        this.setState({
            selected
        })
    }

    render() {
        return (
            <Provider value={this.state}>
                <Router>
                    <Switch>
                        <Layout exact path="/" component={Home} />
                        <Layout path="/about" component={About} />
                        <Layout path="/404" component={Page404} />
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
