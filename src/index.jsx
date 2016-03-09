import React from 'react';
import {render} from 'react-dom';
import GameBoard from './components/GameBoard.js'


//simple component used to render rest of game using Webpack
class App extends React.Component {
  render () {
    return (
    	<div id='game'>
		<GameBoard />
	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));