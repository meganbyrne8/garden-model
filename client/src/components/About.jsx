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
        <div className='about-team-div'>
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
        </div>
      </div>
    )
  }
}
