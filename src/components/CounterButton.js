import React, { Component } from 'react'

export default class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log('nextProps',nextProps)
        // console.log('nextState',nextState)
        if(this.state.count !== nextState.count){
            return true;
        }
        return false;
    }

    updateCount = () => {
        this.setState( state => {
            return {count: state.count +1}
        })
    }

    render() {
        console.log('CounterButton')
        return (
            <div>
               <button color={this.props.color} onClick={this.updateCount}>Counter{this.state.count}</button> 
            </div>
        )
    }
}
