import React from 'react'
import Movie from './Movie'

function Films(props) {
  return (
    <div className='films'>
      {props.films.map(movie => {
        return <Movie key={movie.show.id} {...movie} />
      })}
    </div>
  )
}

export default Films