var Tile = React.createClass({
	// constructor(props, context) {
	// 	super(props, context);

	// 	this.state = {
	// 		clicked: false,
	// 		keyPressed: "Press 'X' or 'O'"
	// 	}
	// },

	getInitialState: function(){
		return {
			clicked: false,
			keyPressed: 'Press the X or O'
		}
	},

	handleClick: function(event){
		this.setState({clicked: !this.state.clicked})
	},

	handleKeyPress: function(event){
		console.log('hi');
		this.setState({keyPressed: 'cat'})
	},

	render: function() {
		if(!this.state.clicked){
			return(
				<h1 onClick={this.handleClick}>
					Hello World
				</h1>
			);
		}else{
			return(
				<div onKeyDown={this.handleKeyPress}>
					a test: {this.keyPressed}
				</div>
			)
		}
	}

})

ReactDOM.render(<Tile />, document.body)