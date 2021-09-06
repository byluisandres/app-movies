import React from 'react'
import Slider from 'react-slick'
import noImage from "../assets/images/no-image.png"
const CastSlideshow = ({ casting }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <Slider {...settings} className="m-5">
        {casting.map((actor) => (
          <div className="bg-image" key={actor.id}>
            <img
              src={actor.profile_path ? `http://image.tmdb.org/t/p/w300/${actor.profile_path}` : noImage}
              className="img-fluid rounded"
              alt="Sample"
            />
            <div
            
            >
              <div className="">
                <h3 className="">{actor.name}</h3>
                <p className="d-block">{actor.character}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default CastSlideshow
