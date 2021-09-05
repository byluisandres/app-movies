import React from 'react'
import PeliculasGrid from '../components/PeliculasGrid'
import Slideshow from '../components/Slideshow'
const Home = () => {
  return (
    <>
      <h1>Inicio</h1>
      <div className="row">
        <div className="col-12">
          <Slideshow />
        </div>
      </div>
      <div className="row">
        <PeliculasGrid />
      </div>
    </>
  )
}

export default Home
