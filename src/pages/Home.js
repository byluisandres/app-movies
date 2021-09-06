import React, { useEffect, useState } from 'react'
import PeliculasGrid from '../components/PeliculasGrid'
import Spinner from '../components/Spinner'

//redux
import { useDispatch, useSelector } from 'react-redux'
//actions
import { obtenerPeliculasAction } from '../actions/peliculasActions'

const Home = () => {
  const dispatch = useDispatch()
  const [perPage, setperPage] = useState(1)

  useEffect(() => {
    if (perPage === 0) {
      setperPage(1)
    } else {
      const cargarPeliculas = () => dispatch(obtenerPeliculasAction(perPage))
      cargarPeliculas()
    }
  }, [dispatch, perPage])
  //obtener el state
  const peliculas = useSelector((state) => state.peliculas.peliculas)
  const loading = useSelector((state) => state.peliculas.loading)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="row">
            <PeliculasGrid peliculas={peliculas} />
          </div>
          <div className="mb-5 d-flex justify-content-end">
            <button
              className="btn btn-outline-secondary m-2"
              disabled={perPage === 1 ? true : false}
              onClick={() => setperPage(perPage - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="btn btn-outline-secondary m-2"
              onClick={() => setperPage(perPage + 1)}
              disabled={perPage === 59 ? true : false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Home
