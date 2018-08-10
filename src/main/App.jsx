'use strict';

import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import '../template/custom.css';

import React, {Component} from 'react';

import Menu from '../template/Menu';
import Routes from './Routes';


export default class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <Menu/>
                <Routes />
            </div>
        )
    }
}

/*
export default props => (
    <div className="container">
        <h1>Teste</h1>
    </div>
)
*/