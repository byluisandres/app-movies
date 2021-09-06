import React from 'react'
import Slider from 'react-slick'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { obtenerPeliculaDetalleAction } from '../actions/peliculasActions'

const SimilarMovie = ({ peliculasSimilares }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  //funcion que redirige de forma programada
  const redireccionarDetallePelicula = (pelicula) => {
    dispatch(obtenerPeliculaDetalleAction(pelicula.id))
    history.push(`/pelicula/${pelicula.id}`)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }
  return (
    <Slider {...settings} className="m-4">
      {peliculasSimilares.map((peliculasSimilar) => (
        <div
          className="card p-2 border"
          
          key={peliculasSimilar.id}
          
        >
          <div className="row g-0 ">
            <div className="col-md-4" type="button"
          onClick={() => redireccionarDetallePelicula(peliculasSimilar)}>
              <img
                src={`http://image.tmdb.org/t/p/w300/${peliculasSimilar.poster_path}`}
                alt={peliculasSimilar.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-3">
                <h5 className="card-title d-inline-block text-truncate">
                  {peliculasSimilar.title}
                </h5>
                <p
                  className="card-text d-inline-block text-truncate"
                  style={{ maxWidth: '200px' }}
                >
                  {peliculasSimilar.overview}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    {dayjs(peliculasSimilar.release_date).format('DD/MM/YYYY')}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SimilarMovie
