import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="parent-div-about-info">

        <div className='info-div-about'>
          <h3>What is My Garden?</h3>
          <p>Some info about this site here</p>
        </div>

        <div className='about-team'>
          <div className='about-team-div'>
            <div className='about-team-image'>
              <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
            </div>
            <div className='about-team-info'>
              <h4>Team Member Name</h4>
              <p>Team Member Position</p>
              <p>Team Member Email</p>
            </div>
          </div>

          <div className='about-team-div'>
            <div className='about-team-image'>
              <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
            </div>
            <div className='about-team-info'>
              <h4>Team Member Name</h4>
              <p>Team Member Position</p>
              <p>Team Member Email</p>
            </div>
          </div>

          <div className='about-team-div'>
            <div className='about-team-image'>
              <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
            </div>
            <div className='about-team-info'>
              <h4>Team Member Name</h4>
              <p>Team Member Position</p>
              <p>Team Member Email</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
