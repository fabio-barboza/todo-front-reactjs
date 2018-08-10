'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import {add, changeDescription, search, clear} from './todoActions';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(event) {
        //Metodo Destructuring do ECMA Script 2015
        const {add, search, description} = this.props;
        if (event.key === 'Enter') {
            event.shiftKey ? search() : add(description);
        } else if (event.key === 'Escape') {
            this.props.clear();
        }
    }

    render() {
        const {add, search, description} = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                           value={this.props.description} onChange={this.props.changeDescription}
                           onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' onClick={() => add(description)}/>
                    <IconButton style='info' icon='search' onClick={search}/>
                    <IconButton style='default' icon='close' onClick={this.props.clear}/>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);