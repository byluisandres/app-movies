import { combineReducers } from 'redux'
import peliculasReducer from './peliculasReducer'
export default combineReducers({
  peliculas: peliculasReducer,
})
