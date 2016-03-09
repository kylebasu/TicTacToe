import React from 'react';
import Tile from './Tile.js'

class GameBoard extends React.Component {
	// ES6 method of getting inital state
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

	// Function to be run after each click in order to determine if a player won
	checkWinner () {
		var that = this;
		var board = that.state.board
		//Sums up each possible win condition in order to see if any are satisfied
		var topRow = board[0] + board [1] + board[2]
		var middleRow = board[3] + board[4] + board[5]
		var bottomRow = board[6] + board[7] + board[8]
		var rightColumn = board[2] + board[5] + board[8]
		var middleColumn = board[1] + board[4] + board[7]
		var leftColumn = board[0] + board[3] + board[6]
		var rightDiagonal = board[2] + board[4] + board[6]
		var leftDiagonal = board[0] + board[4] + board[8]
		//Put the state of each possible win condition in an array in order to use .indexOf
		var holder = [topRow, middleRow, bottomRow, rightColumn, middleColumn, leftColumn, rightDiagonal, leftDiagonal]
		//checks if any row has won with 'x'
		if(holder.indexOf('xxx') !== -1){
			that.setState({winCondition: [true, 'x']});
		}
		//checks if any row has won with 'o'
		else if(holder.indexOf('ooo') !== -1){
			that.setState({winCondition: [true, 'o']});
		}
		//checks if the board has been filled without any winner in order to announce a tie
		else if(board.indexOf(null) === -1){
			that.setState({winCondition:[true, 'Its a Tie!']})
		}
	}

	//This function will be passed to the Tile components in order to still have access to this.state.board from a child component
	selectTile (position, character){
		var that = this
		//Changes this.state.board to reflect a selection by a user as long as Tile hasn't already been occupied & checks for winner
		if(that.state.board[position] !== 'o' && that.state.board[position] !== 'x'){
			that.state.board[position] = character;
			that.setState({board: that.state.board, character: character === 'x' ? 'o': 'x'});
			that.checkWinner();
		}
	}

	//necessary method in order to render jsx
	//checks if we have a winner and displays win message instead of board
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

