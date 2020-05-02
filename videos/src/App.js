import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideosList from './components/VideosList';
import VideoDetail from './components/VideoDetail';

export default class App extends Component {

  API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onSubmit('buildings');
  }

  onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: this.API_KEY
      }
    });

    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
  
  

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid two column divided">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList onVideoSelect={this.onVideoSelect}  videos={this.state.videos} />
            </div>          
          </div>
        </div>        
      </div>
    )
  }
}
