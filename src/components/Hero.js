import React, { useState } from 'react'

const Hero = ({ movies }) => {
    const {featuredMovie, setFeaturedMovie} = useState(movies[0]);
  return (
    <section style
    backgroundImage={`url(https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path})`}
    className="w-full h-[600px] bg-cover bg-center relative flex items-center justify-center">
        <div classname="content">

        </div>
    </section>
  )
}

export default Hero