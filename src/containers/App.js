import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll'
import Header from '../components/Header'
import ErrorBoundary from './ErrorBoundary'
// import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
    // console.log("state", state)
  return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }      
}

const mapDispatchtoProps = (dispatch) => {
    // console.log("dispatch", dispatch)

    return {
        onSearch: (event) => dispatch(setSearchField(event.target.value)),
        // onRequestRobots: () => requestRobots(dispatch)
        onRequestRobots: () => dispatch(requestRobots())
    }    
}

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         // inputSearch: ''
    //     }
    // }
    componentDidMount(){
        console.log('App.js')

        // console.log(this.props.store.getState())
        this.props.onRequestRobots();
    }
    // onSearch = (event) => {
    //     this.setState({inputSearch:event.target.value})
    // }
    render(){
        // const { robots } = this.state;
        const { searchField, onSearch, robots, isPending } = this.props;
        const filteredRobots = robots.filter((robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }))

        return isPending ?
            <h1>Loading....</h1> :
        
             (
                <div className='tc'>
                    <ErrorBoundary>
                        <Header />
                        <SearchBox search={onSearch} />
                        <Scroll>
                            <CardList robots={filteredRobots}/> 
                        </Scroll>
                    </ErrorBoundary>
                    
                    
                </div>
            )
        
        
    }
    
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);