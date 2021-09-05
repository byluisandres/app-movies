import {
  COMENZAR_DESCARGA_PELICULAS,
  DESCARGA_PELICULAS_EXITO,
  DESCARGA_PELICULAS_ERROR,
} from '../types'

//cada reducer tiene su state
const initialState = {
  peliculas: [],
  error: '',
  loading: false,
}

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PELICULAS:
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
    case DESCARGA_PELICULAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
