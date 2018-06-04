// This is for the input at the top of the page
// it will update the videos at the right
import React, { Component } from 'react';

// New class that has access to all the functinality
// from the react.component class
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//must have some GSX, onChange predefined
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);	
	}
	//event has specifics about the event property


}


export default SearchBar; 