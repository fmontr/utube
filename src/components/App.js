import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtubeApi from '../api/youtube.js'


class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.onSearchSubmit("today's news")
  }

  onSearchSubmit = async term => {
    const response = await youtubeApi.searchVideos(term)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = selectedVideo => {
    this.setState({selectedVideo})
  }

  render(){
    console.log(this.state);
    return(
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h4>Showing {this.state.videos.length} results</h4>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
