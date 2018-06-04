import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAH-lgZ2Ft-rvlp4BeGbz5jdaG_2iCVoEM';

// Create component. This compnent should 
// produce some HTML. Always make sure to
// include it inside the div

const App = () => {
	return (
		<div> 
			<SearchBar />
		</div>
	);
}

/*
Show component on the page (in DOM)
to make an instance of component wrap
against the < /> 
Second argument is where you want to place 
this component that you are passing in
*/

ReactDOM.render(<App />, document.querySelector('.container'));