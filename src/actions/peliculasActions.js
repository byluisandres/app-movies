import {
  COMENZAR_DESCARGA_PELICULAS,
  DESCARGA_PELICULAS_EXITO,
  DESCARGA_PELICULAS_ERROR,
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
