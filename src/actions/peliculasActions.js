import {
  COMENZAR_DESCARGA_PELICULAS,
  DESCARGA_PELICULAS_EXITO,
  DESCARGA_PELICULAS_ERROR,
  OBTENER_PELICULA_DETALLE,
  PELICULA_DETALLE_EXITO,
  PELICULA_DETALLE_ERROR,
} from '../types'

import clienteAxios from '../config/axios'

export function obtenerPeliculasAction() {
  return async (dispatch) => {
    dispatch(obtenerPeliculas())
    try {
      const respuesta = await clienteAxios.get('/movie/now_playing')
      dispatch(obtenerPeliculasExito(respuesta.data.results))
    } catch (error) {
      dispatch(obtenerPeliculasError(true))
    }
  }
}

const obtenerPeliculas = () => ({
  type: COMENZAR_DESCARGA_PELICULAS,
  payload: true,
})

const obtenerPeliculasExito = (peliculas) => ({
  type: DESCARGA_PELICULAS_EXITO,
  payload: peliculas,
})
const obtenerPeliculasError = (estado) => ({
  type: DESCARGA_PELICULAS_ERROR,
  payload: estado,
})

//Obtener el detalle de un película
export function obtenerPeliculaDetalleAction(id) {
  return async (dispatch) => {
    dispatch(obtenerPeliculaDetalle())
    try {
      const respuesta = await clienteAxios.get(`/movie/${id}`)
      dispatch(obtenerPeliculaDetalleExito(respuesta.data))
    } catch (error) {
      dispatch(obtenerPeliculaDetalleError(true))
    }
  }
}

const obtenerPeliculaDetalle = () => ({
  type: OBTENER_PELICULA_DETALLE,
  payload: true,
})
const obtenerPeliculaDetalleExito = (pelicula) => ({
  type: PELICULA_DETALLE_EXITO,
  payload: pelicula,
})
const obtenerPeliculaDetalleError = (estado) => ({
  type: PELICULA_DETALLE_ERROR,
  payload: estado,
})
