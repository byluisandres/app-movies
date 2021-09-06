import React, { useEffect } from 'react'
import CastSlideshow from '../components/CastSlideshow'
import SimilarMovie from '../components/SimilarMovie'
import Spinner from '../components/Spinner'
import noImage from '../assets/images/no-image.png'
import {
  obtenerPeliculaDetalleAction,
  obtenerCastingPeliculaAction,
  obtenerPeliculasSimilaresAction,
} from '../actions/peliculasActions'
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

    const cargarCastingPelicula = () =>
      dispatch(obtenerCastingPeliculaAction(id))
    cargarCastingPelicula()

    const cargarPeliculasSimilares = () => {
      dispatch(obtenerPeliculasSimilaresAction(id))
    }
    cargarPeliculasSimilares()
  }, [dispatch, id])

  const peliculaDetalle = useSelector(
    (state) => state.peliculas.peliculaDetalle,
  )
  const loading = useSelector((state) => state.peliculas.loading)
  const casting = useSelector((state) => state.peliculas.casting)
  const peliculasSimilares = useSelector(
    (state) => state.peliculas.peliculasSimilares,
  )


  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
              height: '65vh',
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            >
              <div className="row">
                <div className="col-6 p-5">
                  <img
                    src={
                      peliculaDetalle.backdrop_path
                        ? `http://image.tmdb.org/t/p/w500/${peliculaDetalle.backdrop_path}`
                        : noImage
                    }
                    className="img-fluid rounded mb-3"
                    alt={peliculaDetalle.title}
                  />
                  <a
                    href={peliculaDetalle.homepage}
                    target="_blank"
                    className="text-white"
                    rel="noreferrer"
                  >
                    Homepage
                  </a>
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
          <section className="mt-3">
            <h3>Reparto principal</h3>
            <CastSlideshow casting={casting} />
          </section>

          <section className="mt-5 mb-5 p-2" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
            <h3>Películas similares</h3>
            <SimilarMovie peliculasSimilares={peliculasSimilares} />
          </section>
        </>
      )}
    </>
  )
}

export default DetallePelicula
