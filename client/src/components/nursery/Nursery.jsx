import React, { Component } from 'react'
import NurseryCard from "./NurseryCard"

export default class Nursery extends Component {
  state = {

  }


  render() {
    return (
      <div>
        <h2>Nursery Section</h2>
        <NurseryCard handleGetAllPlants={this.props.handleGetAllPlants} />
      </div>
    )
  }
}
