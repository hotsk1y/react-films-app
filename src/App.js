import './App.css';
import React from 'react'
import Films from './components/Films'
import Search from './components/Search'
import Footer from './components/Footer'
import axios from 'axios'

class App extends React.Component {
  state = {
    films: localStorage.getItem('searchingFilm'),
    isLoading: true
  }

  getFilms = async (searchValue = localStorage.getItem('searchingFilm')) => {
    const films = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    this.setState({ films: films.data, isLoading: false })
    localStorage.setItem('searchingFilm', searchValue)
  }

  componentDidMount() {
    if (!localStorage.length) {
      localStorage.setItem('searchingFilm', 'spider-man')
    }
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
          <Search searchFilms={this.searchFilms} />
          {isLoading ? <h2>Loading...</h2> : <Films films={films} searchFilms={this.searchFilms} />}
        </div>
        <Footer />
      </>
    )
  }
}

export default App;
