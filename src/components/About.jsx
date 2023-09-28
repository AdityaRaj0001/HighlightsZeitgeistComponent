/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import bg4 from '/images/bg4.png'
import leftheadinggrp from '/images/Group 3633.svg'
import rightheadinggrp from '/images/Group 3632.svg'
import bgcard from '/images/bgcard.png'
import mic from '/images/mic.svg'
import audioplayer from '/images/audioplayer.svg'

function About() {
  return (
    <div className='about'>
      <img className='bg4img' src={bg4} />
      <div className='heading-container'>
        <img className='headinggrp' src={leftheadinggrp} />
        <p className='heading'>About The Fest</p>
        <img className='headinggrp' src={rightheadinggrp} />
      </div>
      <div className='card'>
        <img className='bgcard' src={bgcard} />
        <img className='mic' src={mic} />
        <img className='audioplayer' src={audioplayer} />
        <div className='quote'>
          <div className='quote1'>
            <p>Shh! Listen! Someone’s coming!</p>
            <p>I think — I think it might be us!</p>
          </div>
          <div className='quote2'>
            <p>~ J.K. Rowling</p>
          </div>
        </div>
        <div className='description'>
          <p>Welcome to our vibrant and scintillating cultural fest. <strong>Zeitgeist 23</strong> is going to be an extravaganza where you will get to experience different timelines festooned with <strong>Music, Dance, Art, Literature, Food</strong>, and other effervescent activities. This year's cultural fest promises to be a festive and enriching experience, featuring a range of cultural performances, food stalls, and interactive activities. We welcome you to this exhilarating journey through time.</p>
        </div>
      </div>
    </div>
  )
}

export default About