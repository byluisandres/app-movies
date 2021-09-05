import axios from 'axios'
///movie/now_playing
let carteleraPage=1;
const clienteAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key:'4e5d0990973bb9d400910a2cc2c20688',
    language:'es-ES',
    page:carteleraPage
  }
})

export default clienteAxios