//var Tile = require('./Tile');
import React from 'react';
import Tile from './Tile.js'

class GameBoard extends React.Component {
	// getInitialState: function(){
	// 	return {
	// 		board: [
	// 			null, null, null,
	// 			null, null, null,
	// 			null, null, null
	// 		],
	// 		character: 'o',
	// 		winCondition:[false, null]
	// 	};
	// },
	constructor(props, context) {
		super(props, context);

		this.state = {
			board: [
				null, null, null,
				null, null, null,
				null, null, null
			],
			character: 'o',
			winCondition:[false, null]
		};
	}

	checkWinner () {
		var that = this;
		var board = that.state.board;
		var topRow = board[0] + board [1] + board[2]
		var middleRow = board[3] + board[4] + board[5]
		var bottomRow = board[6] + board[7] + board[8]
		var rightColumn = board[2] + board[5] + board[8]
		var middleColumn = board[1] + board[4] + board[7]
		var leftColumn = board[0] + board[3] + board[6]
		var rightDiagonal = board[2] + board[4] + board[6]
		var leftDiagonal = board[0] + board[4] + board[8]
		var holder = [topRow, middleRow, bottomRow, rightColumn, middleColumn, leftColumn, rightDiagonal, leftDiagonal]
		if(holder.indexOf('xxx') !== -1){
			that.setState({winCondition: [true, 'X Won!']});
		}
		else if(holder.indexOf('ooo') !== -1){
			that.setState({winCondition: [true, 'o']});
		}
		else if(board.indexOf(null) === -1){
			that.setState({winCondition:[true, 'Its a Tie!']})
		}
	}

	selectTile (position, character){
		var that = this
		if(that.state.board[position] !== 'o' && that.state.board[position] !== 'x'){
			that.state.board[position] = character;
			that.setState({board: that.state.board, character: character === 'x' ? 'o': 'x'});
			that.checkWinner();
		}
	}

	render (){
		if(this.state.winCondition[0] && this.state.winCondition[1] === 'o'){
			return (<div id='win'>
					<img src='../../styles/images/SHIELD.jpg' />
					WON!
				</div>)
		}else if(this.state.winCondition[0] && this.state.winCondition[1] === 'x'){
			return (<div id='win'>
					<img src='../../styles/images/Hydra.png' />
					WON!
				</div>)
		}else{
			return(
				<div>
					<div id='game'>
					{this.state.board.map(function(tile, position){
						return (
							<Tile status={tile} position={position} character={this.state.character} tileClick={this.selectTile.bind(this)} />
						)
					}, this)}
					</div>
				</div>
			);
		}
	}
};

export default GameBoard

