import React, { Component } from 'react';
import './App.css';
import TypeformRating from 'components/react-typeform-rating'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			"name1" : {key: ''}
		};
	}

	onChange = (obj) => {
		console.log("rating for " + obj.name + " is " + obj.rating);
	}

	componentWillReceiveProps( nextProps ) {
		const { keydown: { event } } = nextProps;
		if ( event ) {
			console.log("event.which " + event.which);
			//if(event.which >= 49) {
			this.setState({"name1": {key: event.which}});
			//} 
		}
	}

	render() {
		return (
			<div className="App">
			<h3>How would you rate your reaction to ...?</h3>
			<TypeformRating 
				name="name1" 
				value={1}
				starCount={5} 
				onChange={this.onChange}
				halfStarSelection={false}
				keyBasedSelection={true}
				isFocused={true}
				keyBindings="auto"
				keyPressed={this.state["name1"].key}
				emptyStar="fa fa-3x fa-star-o"
				selectedStar="fa fa-3x fa-star"
			/>
			</div>
		);
	}
}

export default App;
