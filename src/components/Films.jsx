import React from 'react'
import Movie from './Movie'

function Films(props) {
  const {films = []} = props

  return (      
      <div className='films'>
        {films.length ? films.map(movie => {
          return (
            <Movie key={movie.show.id} {...movie} />
          )
        }) : <h1>Nothing found :(</h1>}
      </div>
  )
}

export default Films