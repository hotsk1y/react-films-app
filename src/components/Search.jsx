import React from 'react'

class Search extends React.Component {
  state = {
    search: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchFilms(this.state.search)
    }
  }

  render() {
    return (
      <div className='search-input'>
        <input
          type="text"
          placeholder='Search'
          value={this.state.search}
          onChange={(event) => { this.setState({ search: event.target.value }) }}
          onKeyDown={this.handleKey}
        />
        <button onClick={() => this.props.searchFilms(this.state.search)}><img src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-5.jpg" alt="" /></button>
      </div>
    )
  }
}

export default Search