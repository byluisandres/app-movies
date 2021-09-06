import React, { useEffect } from 'react'
import { obtenerPeliculasBuscarAction } from '../actions/peliculasActions'
import { useSelector, useDispatch } from 'react-redux'
import PeliculasGrid from '../components/PeliculasGrid'
import Spinner from '../components/Spinner'
const BuscarPage = (props) => {
  const dispatch = useDispatch()
  const { text } = props.match.params
  useEffect(() => {
    //consultar api
    const cargarBuscarPeliculas = () =>
      dispatch(obtenerPeliculasBuscarAction(text))
    cargarBuscarPeliculas()
  }, [dispatch, text])
  const buscarPeliculas = useSelector(
    (state) => state.peliculas.peliculasBuscar,
  )
  const loading = useSelector((state) => state.peliculas.loading)
  
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {buscarPeliculas.length > 0 ? (
            <>
              <h1>Resultados para: {text}</h1>
              <div className="row">
                <PeliculasGrid peliculas={buscarPeliculas} />
              </div>
            </>
          ) : (
            <p>No hay peliculas</p>
          )}
        </>
      )}
    </>
  )
}

export default BuscarPage
