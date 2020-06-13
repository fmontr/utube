import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component{
  state = {
    term: '',
    isLoading: false
  }

  onFormSubmit = async event => {
    event.preventDefault()
    this.setState({isLoading: true})
    await this.props.onSearchSubmit(this.state.term)
    this.setState({isLoading: false})
  }


  render(){
    return(
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className={`ui search ${this.state.isLoading ? 'loading' : ''}`}>
            <div className="field ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={e => {this.setState({term: e.target.value})}}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
