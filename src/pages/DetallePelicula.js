import React, { useEffect } from 'react'
import CastSlideshow from '../components/CastSlideshow'
import { obtenerPeliculaDetalleAction } from '../actions/peliculasActions'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const DetallePelicula = (props) => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  useEffect(() => {
    //consultar api
    const cargarPeliculaDetalle = () =>
      dispatch(obtenerPeliculaDetalleAction(id))
    cargarPeliculaDetalle()
  }, [dispatch, id])

  const peliculaDetalle = useSelector(
    (state) => state.peliculas.peliculaDetalle,
  )
console.log(peliculaDetalle)
  return (
    <>
      <Link to="/" replace className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>
      <div
        className="bg-image mt-3 rounded  text-white"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w500/${peliculaDetalle.backdrop_path})`,
          height: '70vh',
        }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="row">
            <div className="col-6 p-5">
              <img
                src={`http://image.tmdb.org/t/p/w500/${peliculaDetalle.backdrop_path}`}
                className="img-fluid rounded"
                alt={peliculaDetalle.title}
              />
            </div>
            <div className="col-6 p-5 text-white">
              <h1>{peliculaDetalle.title}</h1>
              <span className="">{peliculaDetalle.tagline}</span>
              <section className="w-75">
                {peliculaDetalle.genres ? (
                  <ul className="d-flex list-unstyled justify-content-between mt-3">
                    {peliculaDetalle.genres.map((genero) => (
                      <li key={genero.id} className="">
                        {genero.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
              <span className="d-block mb-3">
                Fecha de estreno{' '}
                {dayjs(peliculaDetalle.release_date).format('DD/MM/YYYY')}
              </span>
              <section>{peliculaDetalle.overview}</section>
            </div>
          </div>
        </div>
      </div>

      {/* <CastSlideshow /> */}
    </>
  )
}

export default DetallePelicula
