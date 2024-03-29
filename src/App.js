//import React from 'react'
//import CardList from './CardList';
//import SearchBox from './SearchBox'
//import { robots } from './robots';


//const App = () => {
//	return(
//		<div className='tc'>
//			<h1>RobotFriends</h1>
//			<SearchBox />
//			<CardList robots={robots}/>
//		</div>
//	);
//}

//export default App;


//===================================================

// Start using Statement

//===================================================

//import React from 'react'
//import CardList from './CardList';
//import SearchBox from './SearchBox'
//import Scroll from './Scroll';
//import './App.css';


//class App extends React.Component {
//	constructor(){
//		super ()
//		this.state = {
//			robots: [], 
//			searchfield:''
//		}
//	}

//================================================================
//	componentDidMount(){
//		fetch('https://jsonplaceholder.typicode.com/users')
  //    		.then(response => {
    //  			return response.json();
      //		})
      	//	.then(users => {
      	//		this.setState({robots: users})
      	//	});
//	}
//================================================================

//	componentDidMount(){
//		fetch('https://jsonplaceholder.typicode.com/users')
 //     		.then(response => response.json())
 //     		.then(users => {this.setState({robots: users})});
//	}
//
//	onSearchChange = (event) => {
//		this.setState({ searchfield: event.target.value });
//	}
//
//	render (){
//		const filteredRobots = this.state.robots.filter(robots =>{
//			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//		})
//
//		if (this.state.robots.length === 0) {
//			return <h1>Loading</h1>
//		} else {
//		return(
//			<div className='tc'>
//				<h1 className ='f1'>RobotFriends</h1>
//				<SearchBox searchChange={this.onSearchChange}/>
//				<Scroll>
//					<CardList robots={filteredRobots}/>
//				</Scroll>
//			</div>
//			);
//		}
//	}
//}

//export default App;

//====================================================================

// CLEANER  ( ==> DESTRUCTURY <== )

//====================================================================

import React from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry'
import './App.css';


class App extends React.Component {
	constructor(){
		super ()
		this.state = {
			robots: [], 
			searchfield:''
		}
	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
      	.then(response => response.json())
      	.then(users => {this.setState({robots: users})});
	}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value });
}

render (){
	const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ?
	<h1>Loading</h1> :
	(
		<div className='tc'>
			<h1 className ='f1'>RobotFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
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