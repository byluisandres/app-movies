import axios from 'axios'
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
}
const clienteAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  https: config,
  params: {
    api_key: '4e5d0990973bb9d400910a2cc2c20688',
    language: 'es-ES',
  },
})

export default clienteAxios
