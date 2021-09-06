import React from 'react'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { useDispatch } from 'react-redux'
import noImage from '../assets/images/no-image.png'

import { obtenerPeliculaDetalleAction } from '../actions/peliculasActions'

const PeliculasGrid = ({ peliculas }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  //funcion que redirige de forma programada
  const redireccionarDetallePelicula = (pelicula) => {
    dispatch(obtenerPeliculaDetalleAction(pelicula.id))
    history.push(`/pelicula/${pelicula.id}`)
  }
  return (
    <>
      {peliculas.map((pelicula) => (
        <div className="col-md-3 mb-4 position-relative" key={pelicula.id}>
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <div
                onClick={() => redireccionarDetallePelicula(pelicula)}
                type="button"
              >
                <img
                  src={
                    pelicula.poster_path
                      ? `http://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
                      : noImage
                  }
                  className="img-fluid"
                  alt={pelicula.title}
                />
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
          </div>
        </div>
      ))}
    </>
  )
}

export default PeliculasGrid
