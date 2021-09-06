import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const Navbar = () => {
  //const dispatch = useDispatch()
  const history = useHistory()

  const [textBuscar, setTextBuscar] = useState({
    texto: '',
  })

  const actualizarState = (e) => {
    setTextBuscar({
      ...textBuscar,
      [e.target.name]: e.target.value,
    })
  }
  const buscarPelicula = (e) => {
    e.preventDefault()
    if (textBuscar.texto.trim() === '') {
      return
    } else {
      history.push(`/buscar/${textBuscar.texto}`)
      
    }
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          App Movies
        </Link>
        <form className="d-flex input-group w-auto" onSubmit={buscarPelicula}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Buscar película"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={actualizarState}
            name="texto"
          />
          <button
            className="input-group-text border-0"
            id="search-addon"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
