import React, { useEffect } from 'react'
import PeliculasGrid from '../components/PeliculasGrid'
import Slideshow from '../components/Slideshow'
import Spinner from '../components/Spinner'

//redux
import { useDispatch, useSelector } from 'react-redux'
//actions
import { obtenerPeliculasAction } from '../actions/peliculasActions'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const cargarPeliculas = () => dispatch(obtenerPeliculasAction())
    cargarPeliculas()
  }, [dispatch])

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
            <div className="col-12">
              <Slideshow />
            </div>
          </div>
          <div className="row">
            <PeliculasGrid peliculas={peliculas} />
          </div>
        </>
      )}
    </>
  )
}

export default Home
