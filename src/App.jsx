import React, { useState } from 'react'
import Card from './components/Card'

function App() {

  const movies = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      image: "https://marketing.caddcentre.com/uploads/thumbnails/1680689719_full-stack.jpg"
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      image: "https://marketing.caddcentre.com/uploads/thumbnails/1716630600_software-development-thumb.jpg"
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      image: "https://marketing.caddcentre.com/uploads/thumbnails/1680686120_android.jpg"
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      image: "https://marketing.caddcentre.com/uploads/thumbnails/1680687244_c++.jpg"
    },
  ]

  return (
    <div className='container'>
      <div className="row justify-content-around">
            {movies.map((value, index)=>
              <Card key={index} movieTitle={value.title} movieDesc={value.desc} movieThumb={value.image} />
            )}
      </div>
    </div>
  )
}

export default App
