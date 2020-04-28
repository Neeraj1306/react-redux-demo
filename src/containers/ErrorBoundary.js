import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Some Error Occurred</h1>
                </div>
            ) 
        } else {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
        
    }
}
