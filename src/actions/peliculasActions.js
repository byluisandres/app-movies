import {
  COMENZAR_DESCARGA_PELICULAS,
  DESCARGA_PELICULAS_EXITO,
  DESCARGA_PELICULAS_ERROR,
  OBTENER_PELICULA_DETALLE,
  PELICULA_DETALLE_EXITO,
  PELICULA_DETALLE_ERROR,
  OBTENER_PELICULA_CAST,
  PELICULA_CAST_EXITO,
  PELICULA_CAST_ERROR,
  OBTENER_PELICULA_SIMILAR,
  PELICULA_SIMILAR_EXITO,
  PELICULA_SIMILAR_ERROR,
} from '../types'

import clienteAxios from '../config/axios'

export function obtenerPeliculasAction(perPage) {
  return async (dispatch) => {
    dispatch(obtenerPeliculas())
    try {
      const respuesta = await clienteAxios.get(`/movie/now_playing/`, {
        params: {
          page: perPage,
        },
      })
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

//obtener el casting de la pelicula
export function obtenerCastingPeliculaAction(id) {
  return async (dispatch) => {
    dispatch(obtenerCastingPelicula())
    try {
      const respuesta = await clienteAxios.get(`/movie/${id}/credits`)
      dispatch(obtenerCastingPeliculaExito(respuesta.data.cast))
    } catch (error) {
      dispatch(obtenerCastingPeliculaError(true))
    }
  }
}

const obtenerCastingPelicula = () => ({
  type: OBTENER_PELICULA_CAST,
  payload: true,
})

const obtenerCastingPeliculaExito = (casting) => ({
  type: PELICULA_CAST_EXITO,
  payload: casting,
})
const obtenerCastingPeliculaError = (estado) => ({
  type: PELICULA_CAST_ERROR,
  payload: estado,
})

//obtener películas similares
export function obtenerPeliculasSimilaresAction(id) {
  return async (dispatch) => {
    dispatch(obtenerPeliculasSimilares())
    try {
      const respuesta = await clienteAxios.get(`/movie/${id}/similar`)
      dispatch(obtenerPeliculasSimilaresExito(respuesta.data.results))
    } catch (error) {
      dispatch(obtenerPeliculasSimilaresError())
    }
  }
}

const obtenerPeliculasSimilares = () => ({
  type: OBTENER_PELICULA_SIMILAR,
  payload: true,
})

const obtenerPeliculasSimilaresExito = (peliculasSimilares) => ({
  type: PELICULA_SIMILAR_EXITO,
  payload: peliculasSimilares,
})
const obtenerPeliculasSimilaresError = (estado) => ({
  type: PELICULA_SIMILAR_ERROR,
  payload: estado,
})
