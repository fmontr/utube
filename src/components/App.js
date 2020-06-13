import React from 'react'
import SearchBar from './SearchBar'
import youtubeApi from '../api/youtube.js'


class App extends React.Component{
  state = {
    videos: []
  }

  onSearchSubmit = async term => {
    const response = await youtubeApi.searchVideos(term)
    this.setState({videos: response.data.items})
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h4>Showing {this.state.videos.length} results</h4>
      </div>
    )
  }
}

export default App
