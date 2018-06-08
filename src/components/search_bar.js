// This is for the input at the top of the page
// it will update the videos at the right
import React, { Component } from 'react';

// New class that has access to all the functinality
// from the react.component class. we use class when
// we need some type of state when rendered
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//must have some GSX, onChange predefined
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);	
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	//event has specifics about the event property


}


export default SearchBar; 