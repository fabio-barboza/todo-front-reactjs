'use strict';

import React, {Component} from 'react';
import PageHeader from "../template/PageHeader";

export default class Todo extends Component {

    render() {
        return (
            <div className="container">
                <PageHeader name="Sobre" small="Nós"></PageHeader>
                <h2>Sobre o Sistema</h2>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
        )
    }
}