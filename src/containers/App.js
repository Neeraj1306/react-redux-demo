import React, {Component} from 'react';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from './ErrorBoundary'
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox'

 class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            inputSearch: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users});
        })
    }
    onSearch = (event) => {
        this.setState({inputSearch:event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot => {
            return robot.name.toLowerCase().includes(this.state.inputSearch.toLowerCase())
        }))
        if(this.state.robots.length===0){
            return(<h1>Loading....</h1>)
        } else {
            return (
                <div className='tc'>
                    <ErrorBoundary>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox search={this.onSearch} />
                        <Scroll>
                            <CardList robots={filteredRobots}/> 
                        </Scroll>
                    </ErrorBoundary>
                    
                    
                </div>
            )
        }
        
    }
    
}

export default App;