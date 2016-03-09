import React from 'react';
import {render} from 'react-dom';
import GameBoard from './components/GameBoard.js'

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