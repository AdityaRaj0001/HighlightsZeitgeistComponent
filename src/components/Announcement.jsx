import React from 'react'
import AnnouncementData from './AnnouncementData'
import bgimg from '/images/bg.png'
import recFrame from '/images/rectangle-frames.svg'
import leftmegaphone from '/images/Left-MegaPhone.svg'
import leftheadinggrp from '/images/Group 3633.svg'
import rightmegaphone from '/images/Right-MegaPhone.svg'
import rightheadinggrp from '/images/Group 3632.svg'

const Announcement = () => {
  return (
    <div className='Announcements'>
      <img className='leftmegaphone' src={leftmegaphone} />
      <img className='bgimg' src={bgimg} />
      <img className='recFrame' src={recFrame} />
      <img className='rightmegaphone' src={rightmegaphone} />
      <div className='heading-container'>
        <img className='headinggrp' src={leftheadinggrp} />
        <p className='heading'>Announcements</p>
        <img className='headinggrp' src={rightheadinggrp} />
      </div>
      <div className="announcements-container">
      {
      AnnouncementData.map((value,index)=>{
        return <div className='bullets' key={index}>
      <ul className='bul'>
        <li>{value}</li>
      </ul>
    </div>
      })
    }
    </div> 
    </div>
     
  
  )
}

export default Announcement