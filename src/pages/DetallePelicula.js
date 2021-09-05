import React from 'react'
import CastSlideshow from '../components/CastSlideshow'
const DetallePelicula = () => {
  return (
    <>
      {/* <ul>
        <li>poster</li>
        <li>resumen película</li>
        <li>slidshow de actores</li>
        <li>boton regresar</li>
      </ul> */}
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3>Título</h3>
          <div>
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>
      </div>
      {/* <CastSlideshow /> */}
    </>
  )
}

export default DetallePelicula
