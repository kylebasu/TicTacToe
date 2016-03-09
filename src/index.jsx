import React from 'react';
import {render} from 'react-dom';
import GameBoard from './components/GameBoard.js'


//simple component used to render rest of game using Webpack
class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			games: [
				null
			]
		};
	}

	handleClick1 () {
		console.log('This is happening')
		this.state.games.push(null);
		this.setState({games: this.state.games});
	}

  	render () {
    		return (
    			<div>
    			{this.state.games.map(function(test, test1){
						return (
							<GameBoard />
						)
			}, this)}
    			<div className='addGame' onClick={this.handleClick1.bind(this)}>Add Game</div>
			</div>
    		)
  	}
}

render(<App/>, document.getElementById('app'));