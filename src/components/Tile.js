import React from 'react';

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
	constructor(props, context) {
		super(props, context);

		this.state = {}
	}

	handleClick () {
		this.props.tileClick(this.props.position, this.props.character)
	}

	render () {
		console.log(this.props)
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

}

export default Tile