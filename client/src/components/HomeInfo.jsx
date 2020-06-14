import React, { Component } from 'react'
import './HomeInfo.css'

export default class HomeInfo extends Component {
  render() {
    return (
      <div className="parent-div-home-info">
        <div className='info-div-home'>
          <h3>What is My Garden?</h3>
          <p>Some info about this site here</p>
        </div>
        <div className='home-image-div'>
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
          <img src={'https://www.publicdomainpictures.net/pictures/130000/nahled/gray-box-background.jpg'} />
        </div>
      </div>
    )
  }
}
