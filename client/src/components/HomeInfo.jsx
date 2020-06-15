import React, { Component } from 'react'
import './HomeInfo.css'

export default class HomeInfo extends Component {
  render() {
    return (
      <div className="parent-div-home-info">
        <div className='info-div-home'>
          <h3>What is My Garden?</h3>
          <p>Garden Modeling is a site that allows users to make better decisions when planning out their gardens. Keeping track of requirements for each individual seed or bulb can be time consuming and irritating, but with Garden Modeling, users can store all of that information in one place.
            <br />
            <br />
           Garden Modeling also allows users to create gardens under their profiles, and fill those gardens with relevant plants. While all gardens are available to all users on our site, the only user who can edit or remove gardens is the user who created that garden. We encourage all users to check out gardens and make suggestions for this project via our feedback email, which can be found on the About page. </p>
        </div>
        <div className='home-image-div'>
          <img src={'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} />
          <span>Photo Credit:
           <a href='https://unsplash.com/@markusspiske'> Markus Spiske</a>
          </span>
        </div>
      </div>
    )
  }
}
