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
    default:
      return state
  }
}
