import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// mapping of states, adding a key named books
// the array of books is whats going to be returned
const rootReducer = combineReducers({
	//reducer object 
	// key: reducer
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
