import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="parent-div-about-info">

        <div className='info-div-about'>
          <h3>What is My Garden?</h3>
          <img src={'https://images.unsplash.com/photo-1507484467459-0c01be16726e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} alt="various plants" />
          <span>Photo Credit:
           <a href='https://unsplash.com/@markusspiske'> Markus Spiske</a>
          </span>
          <p>Garden Modeling  was created during the COVID-19 shutdowns in New York in early spring of 2020 as a way to keep track of all of the plants in your garden. From spacing between roots to soil ph levels and water frequency, each individual plant grown comes with a lot of information for care. My garden is a way to organize all of that information with some ease.
           <br />
            <br />
           My Garden will also incorporate visual elements to allow users to create planters and planting beds, allowing for a better garden visualization and a better overall user experience.
          </p>
        </div>

        <div className='about-team'>
          <h3>Our Team</h3>
          <div className='about-team-div'>
            <div className='about-team-image'>
              <img
                src={'https://avatars1.githubusercontent.com/u/52892348?s=460&u=11ac10651634a843d1915c80f35da02ea416517d&v=4'}
                alt="staff photo"
              />
            </div>
            <div className='about-team-info'>
              <h4>Megan Byrne</h4>
              <p>Software Engineer & Creator</p>
              <p>feedback@plantinggardensforfun.biz</p>
            </div>
          </div>

          <div className='about-team-div'>
            <div className='about-team-image'>
              <img
                src={'https://avatars1.githubusercontent.com/u/52892348?s=460&u=11ac10651634a843d1915c80f35da02ea416517d&v=4'}
                alt="staff photo"
              />
            </div>
            <div className='about-team-info'>
              <h4>Megan Byrne</h4>
              <p>Software Engineer & Creator</p>
              <p>feedback@plantinggardensforfun.biz</p>
            </div>
          </div>

          <div className='about-team-div'>
            <div className='about-team-image'>
              <img
                src={'https://avatars1.githubusercontent.com/u/52892348?s=460&u=11ac10651634a843d1915c80f35da02ea416517d&v=4'}
                alt="staff photo"
              />
            </div>
            <div className='about-team-info'>
              <h4>Megan Byrne</h4>
              <p>Software Engineer & Creator</p>
              <p>feedback@plantinggardensforfun.biz</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
