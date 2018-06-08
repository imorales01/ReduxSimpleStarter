// state arguement is not application sate, only
// the state this reducer is responsible for
// they are in charge of changing the state and they do with action
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}