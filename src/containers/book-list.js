import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 

// made it to a container because
// have to be aware of state
// only booklist cares about the list of books
class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//state contains an array of books
// this is the glue btw react and redux
function mapStateToProps(state) {
	//whatever returned will show up as props
	// inside of Booklist
	// this is the connection btw redux
	return {
		books: state.books
	};
}

// returned items will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
	// when selectBook called result should be passed to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote booklist from a component to a 
//container - it needs to know about this 
//new dispatch method, selectbook. make it 
//available as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);