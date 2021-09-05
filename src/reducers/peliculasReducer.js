import {
  COMENZAR_DESCARGA_PELICULAS,
  DESCARGA_PELICULAS_EXITO,
  DESCARGA_PELICULAS_ERROR,
  OBTENER_PELICULA_DETALLE,
  PELICULA_DETALLE_EXITO,
  PELICULA_DETALLE_ERROR
} from '../types'

//cada reducer tiene su state
const initialState = {
  peliculas: [],
  peliculaDetalle: '',
  error: '',
  loading: false,
}

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PELICULAS:
    case OBTENER_PELICULA_DETALLE:
      return {
        ...state,
        loading: action.payload,
      }

    case DESCARGA_PELICULAS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        peliculas: action.payload,
      }

    case PELICULA_DETALLE_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        peliculaDetalle: action.payload,
      }
    case DESCARGA_PELICULAS_ERROR:
    case PELICULA_DETALLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
