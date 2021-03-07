import './App.css';
import React from 'react'
import Films from './components/Films'
import Search from './components/Search'
import Footer from './components/Footer'
import axios from 'axios'

class App extends React.Component {
  state = {
    films: [],
    isLoading: true
  }

  getFilms = async (searchValue = 'spider-man') => {
    const films = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    this.setState({ films: films.data, isLoading: false })
  }

  componentDidMount() {
    this.getFilms()
  }

  searchFilms = (searchValue) => {
    this.getFilms(`${searchValue}`)
  }

  render() {
    const { films, isLoading } = this.state

    return (
      <>
        <div className='container'>
          {isLoading
            ? <h2>Loading...</h2>
            : <>
              <Search searchFilms={this.searchFilms} />
              <Films films={films} searchFilms={this.searchFilms} />
                {!films.length ? <></> : <Footer />}              
            </>}
        </div>
      </>
    )
  }
}

export default App;
