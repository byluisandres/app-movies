import React from 'react'

const PeliculasGrid = () => {
  return (
    <>
      {/* <div className="border">
        <h1>Películas grid</h1>
        <ul>
          <li>Poster</li>
          <li>Título</li>
          <li>Fecha de estreno</li>
          <li>calificacion</li>
        </ul>
      </div> */}
      <div className="col-md-3 mb-4">
        <div className="card">
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
              className="img-fluid"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
              ></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <div className="d-flex justify-content-between">
              <span>Fecha de estreno</span>
              <span>Calificación</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default PeliculasGrid
