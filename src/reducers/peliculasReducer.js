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

//cada reducer tiene su state
const initialState = {
  peliculas: [],
  peliculaDetalle: '',
  casting: [],
  error: '',
  loading: false,
  peliculasSimilares: [],
}

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PELICULAS:
    case OBTENER_PELICULA_DETALLE:
    case OBTENER_PELICULA_CAST:
    case OBTENER_PELICULA_SIMILAR:
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
    case PELICULA_CAST_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        casting: action.payload,
      }
    case PELICULA_SIMILAR_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        peliculasSimilares: action.payload,
      }
    case DESCARGA_PELICULAS_ERROR:
    case PELICULA_DETALLE_ERROR:
    case PELICULA_CAST_ERROR:
    case PELICULA_SIMILAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
