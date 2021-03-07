import './App.css';
import React from 'react'
import Films from './components/Films';

class App extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=batman')
      .then(response => response.json())
      .then(data => this.setState({films: data}))
  }

  render() {    
    const {films} = this.state
    
    return (
      <div className='container'>
        {console.log(this.state.films)}
        {films.length ? <Films films={films} /> : <h2>Загрузка...</h2>}
      </div>
    )
  }
}

export default App;
