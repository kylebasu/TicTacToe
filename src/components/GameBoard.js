//var Tile = require('./Tile');

var GameBoard = React.createClass({
	getInitialState: function(){
		return {
			board: [
				null, null, null,
				null, null, null,
				null, null, null
			],
			character: 'o',
			winCondition:[false, null]
		};
	},
	checkWinner: function(){
		var board = this.state.board
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
			this.setState({winCondition: [true, 'X Won!']});
		}
		else if(holder.indexOf('ooo') !== -1){
			this.setState({winCondition: [true, 'O Won!']});
		}
		else if(board.indexOf(null) === -1){
			this.setState({winCondition:[true, 'Its a Tie!']})
		}
	},
	selectTile: function(position, character){
		if(this.state.board[position] !== 'o' && this.state.board[position] !== 'x'){
			this.state.board[position] = character;
			this.setState({board: this.state.board, character: character === 'x' ? 'o': 'x'});
			this.checkWinner();
		}
	},
	render: function(){
		if(this.state.winCondition[0]){
			return (<div>{this.state.winCondition[1]}</div>)
		}else{
			return(
				<div>
					<div id='game'>
					{this.state.board.map(function(tile, position){
						return (
							<Tile status={tile} position={position} character={this.state.character} tileClick={this.selectTile} />
						)
					}, this)}
					</div>
				</div>
			);
		}
	}
});
var Tile = React.createClass({
	// constructor(props, context) {
	// 	super(props, context);

	// 	this.state = {
	// 		clicked: false,
	// 		keyPressed: "Press 'X' or 'O'"
	// 	}
	// },
	cssConverter: {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight'
	},
	handleClick: function(){
		this.props.tileClick(this.props.position, this.props.character)
	},

	render: function(){
		return(
			<div className={'tile ' + this.cssConverter[this.props.position]} onClick={this.handleClick}>
				  {this.props.status}
			</div>
		)
	}

	// render: function() {
	// 	if(!this.state.clicked){
	// 		return(
	// 			<h1 onClick={this.handleClick}>
	// 				Hello World
	// 			</h1>
	// 		);
	// 	}else{
	// 		return(
	// 			<div onKeyDown={this.handleKeyPress}>
	// 				a test: {this.keyPressed}
	// 			</div>
	// 		)
	// 	}
	// }

})

ReactDOM.render(<GameBoard />, document.getElementById('container'))
