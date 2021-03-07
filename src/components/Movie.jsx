import React from 'react'

function Movie(props) {
  const filmYear = new Date(props.show.premiered).getFullYear();
  let filmSummary = props.show.summary || 'None description'

  if (filmSummary.includes('<p>')) {
    filmSummary = filmSummary.replace('<p>', '')
    if (filmSummary.includes('</p>')) {
      filmSummary = filmSummary.replace('</p>', '')
    }
    if (filmSummary.includes('<b>')) {
      filmSummary = filmSummary.replace('<b>', '')
    }
    if (filmSummary.includes('</b>')) {
      filmSummary = filmSummary.replace('</b>', '')
    }
    if (filmSummary.includes('<strong>')) {
      filmSummary = filmSummary.replace('<strong>', '')
    }
    if (filmSummary.includes('</strong>')) {
      filmSummary = filmSummary.replace('</strong>', '')
    }
    if (filmSummary.includes('<i>')) {
      filmSummary = filmSummary.replace('<i>', '')
    }
    if (filmSummary.includes('</i>')) {
      filmSummary = filmSummary.replace('</i>', '')
    }
  }
  const filmGenres = props.show.genres.map((genre, id) => <li key={id}>{genre}</li>)

  return <div className='film-card'>
    <img src={props.show.image===null ? 'http://via.placeholder.com/170x250?text=failed+to+load+image' : props.show.image.medium} alt="" />
    <div className="movie-column">
      <div className='film-card__title'>{props.show.name}</div>
      <div className='film-card__year'>{filmYear}</div>
      <ul className='film-card__genre'>{filmGenres}</ul>
      <div className='film-card__summary'>{filmSummary.slice(0, 160)}...</div>
    </div>
  </div>
}

export default Movie