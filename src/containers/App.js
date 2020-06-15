import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import {robots} from '../robots';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state= {
	robots: robots,
	searchfield: ''

		}
	}

	OnSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
     
	}
	render() {
		const filteredRobots= this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
		<div className='tc'>
		<h1> RoboFriends </h1>
		<SearchBox searchChange={this.OnSearchChange} />
		<Scroll>
		<ErrorBoundry>
		<CardList robots={filteredRobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>  
		

		);

	}
	
}

export default App; 