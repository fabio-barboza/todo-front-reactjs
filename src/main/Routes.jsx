'use strict';

import React, {Component} from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Todo from '../todo/Todo';
import About from '../about/About';

export default class Routes extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/todos' component={Todo} />
                <Route path='/about' component={About} />
                <Redirect from='*' to='/todos' />
            </Router>
        )
    }

}