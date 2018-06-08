import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAH-lgZ2Ft-rvlp4BeGbz5jdaG_2iCVoEM';


// Create component. This compnent should 
// produce some HTML. Always make sure to
// include it inside the div. This is a functional
// component (doesnt have a state). Used when just 
// taking information and spitting out information

// const App = () => {
// 	return (
// 		<div> 
// 			<SearchBar />
// 		</div>
// 	);
// }


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos:[], 
			selectedVideo: null
		};
		
		this.videoSearch('surfboards');
	}
		
		// term is the searched item from user
	videoSearch(term) {
		// when it first renders it will put 5 'terms' in array
		// 5 results are by default 
		YTSearch({key:API_KEY, term: term}, (videos) => {
			//console.log(data);
			// when this has completed the states will be changed
			// this will cause the bottom to be re-rendered
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			});
			//the top line is same as this.setState({videos:videos})
		});
	}
	
	render() {
		// debounce returns  a function that only allows the inner function that can
		// only be called every 300 miliseconds. 
		const videoSearch =_.debounce((term) => {this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

/*
Show component on the page (in DOM)
to make an instance of component wrap
against the < /> 
Second argument is where you want to place 
this component that you are passing in
*/

ReactDOM.render(<App />, document.querySelector('.container'));