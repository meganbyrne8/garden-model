import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NurseryCard extends Component {
  state = {
    name: "",
    genus: "",
    description: "",
    imgURL: "",
    plantingnotes: ""
  }


  // create a map function that maps through all returned results and prints each of those results on a card that gets displayed to the nursery page

  render() {
    return (
      <div>
        <h3>This is the nursery card!</h3>
        <Link to='/nursery/index'>
          <p>placeholder for card info</p>
        </Link>
      </div>
    )
  }
}
