import React from 'react';


//used as a dictionary to change integers to strings in order to properly CSS
var cssConverter = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight'
	}
class Tile extends React.Component{
	// ES6 method of getting inital state
	constructor(props, context) {
		super(props, context);

		this.state = {}
	}

	//calls click method that was passed as props from Gameboard
	handleClick () {
		this.props.tileClick(this.props.position, this.props.character)
	}


	//necessary method in order to render jsx
	//displays different Tile depending on this.props.status, this.props.status should indicate whether the Tile is unclicked or if it is which player has clicked it
	render () {
		if(this.props.status === null){		
			return(
				<div className={'tile ' + cssConverter[this.props.position]} onClick={this.handleClick.bind(this)}>
					  {this.props.status}
				</div>
			)
		}
		if(this.props.status === 'o'){
			return(
				<div className={'tile ' + cssConverter[this.props.position]}>
					<img src='../../styles/images/SHIELD.jpg' />
				</div>
			)
		}else if(this.props.status === 'x'){
			return(
				<div className={'tile ' + cssConverter[this.props.position]}>
					<img src='../../styles/images/Hydra.png' />
				</div>
			)
		}
	}
}

export default Tile