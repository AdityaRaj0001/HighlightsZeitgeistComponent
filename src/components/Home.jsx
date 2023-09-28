/* eslint-disable no-unused-vars */
import React from 'react';
import bg from '/images/wooden-floor.png'
import rays from '/images/rays.svg'
import big_logo from '/images/Z-logo.svg'
import train from '/images/train.svg'
import traintrack from '/images/train-track.svg'
import lamppost from '/images/lamp-post.svg'
import Navbar from './Navbar/Navbar'

function Home() {
  return (
    <div className='home w-screen overflow-hidden relative'>
    <Navbar/>
      <img className="b1 absolute z-9" src={bg} />
      <img className="rays absolute z-10" src={rays} />
      <div className='big-logo z-100 absolute top-40 w-screen flex flex-col justify-center items-center'><img className="h-100 z-120" src={big_logo} /></div>
      <div className="train z-100 absolute bottom-0 w-full">
        <img className='absolute bottom-0 z-1000' src={train} />
        <img className="absolute bottom-0 right-10" src={lamppost} />
        <img src={traintrack} />
      </div>
    </div>
  )
}

export default Home