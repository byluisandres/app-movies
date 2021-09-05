import React from 'react'
import dayjs from 'dayjs'
import ReactStars from 'react-rating-stars-component'
const PeliculasGrid = ({ peliculas }) => {
  return (
    <>
      {peliculas.map((pelicula) => (
        <div className="col-md-3 mb-4 position-relative" key={pelicula.id}>
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <a href="#!">
                <img
                  src={`http://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                  className="img-fluid"
                  alt={pelicula.title}
                />
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">{pelicula.title}</h5>
              <span
                className="d-inline-block text-truncate"
                style={{ maxWidth: '200px' }}
              >
                {pelicula.original_title}
              </span>
              <div className="">
                <span className="">
                  Fecha de estreno{' '}
                  {dayjs(pelicula.release_date).format('DD/MM/YYYY')}
                </span>
                <span>
                  <ReactStars
                    count={10}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                    value={pelicula.vote_average}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PeliculasGrid
