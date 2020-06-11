import React, { Component } from 'react'
import NurseryCard from "./NurseryCard"
import { getAllPlants, getOnePlant } from "../../services/plants"


export default class Nursery extends Component {
  state = {
    allPlants: []
  }

  async componentDidMount() {
    const allPlants = await getAllPlants()
    this.setState({ allPlants })
  }

  render() {
    const populatePlants = this.state.allPlants.map((plant, index) => (
      <NurseryCard
        id={plant.id}
        name={plant.name}
        genus={plant.genus}
        description={plant.description}
        imageurl={plant.imageurl}
        plantingnotes={plant.plantingnotes}
        key={index}
      />
    ));

    return (
      <>
        <div>
          <h2>This is the Nursery!</h2>
        </div>
        <div>
          {populatePlants}
        </div>
      </>
    )
  }
}
