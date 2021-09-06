import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4e5d0990973bb9d400910a2cc2c20688',
    language: 'es-ES',
  },
})

export default clienteAxios
