import React from 'react'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'

import Layout from './layout'
import Home from './home'
import About from './about'
import Page404 from './404'

export default class Routes extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Layout exact path="/" component={Home} />
                    <Layout path="/about" component={About} />
                    <Layout path="/404" component={Page404} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        )
    }
}
