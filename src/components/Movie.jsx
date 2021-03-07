import React from 'react'

function Movie(props) {
  const filmYear = new Date(props.show.premiered).getFullYear();
  const filmSummary = props.show.summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', '').slice(0, 200)
  const filmGenres = props.show.genres.map((genre, id) => <li key={id}>{genre}</li>)

  return <div className='film-card'>
    <img src={props.show.image.medium} alt="" />
    <div className="movie-column">
      <div className='film-card__title'>{props.show.name}</div>
      <div className='film-card__year'>{filmYear}</div>
      <ul className='film-card__genre'>
        {filmGenres}
      </ul>
      <div className='film-card__summary'>{filmSummary}...</div>
    </div>
  </div>
}

export default Movie