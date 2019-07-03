import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add(+)" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract(-)" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Show Result</button>
                
                <ul style={{listStyleType: 'none', margin:'0px', padding: '0px'}}>
                    {this.props.result.map(res => (
                        <li onClick={() => this.props.onResultDelete(res.id)} key={res.id}>{res.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.ctr.counter,
        result: state.res.result
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (counter) => dispatch({type: actionTypes.STORE_RESULT, counter:counter }),
        onResultDelete: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);