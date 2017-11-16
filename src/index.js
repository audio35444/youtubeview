import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY='AIzaSyBij_Z1_u6Fysm5mSFX9mG7TdgfQZMzwIM';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    };
    YTSearch({key:API_KEY,term:'metalica'},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  searchingVideo(textChange){
    YTSearch({key:API_KEY,term:textChange},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
    const videoSearch = _.debounce((textChange)=>this.searchingVideo(textChange),500);
    return (
      <div>
        <SearchBar onSearchVideo={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelected={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
};
ReactDOM.render(<App />,document.querySelector('.container'));
