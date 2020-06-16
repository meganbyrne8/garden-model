import React, { Component } from 'react'
import NurseryCard from "./NurseryCard"
import { getAllPlants } from "../../services/plants"
import './Nursery.css'


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
        <div className="nursery-parent-div">
          <h2>Welcome To Our Growing Nursery</h2>
        </div>
        <div className="nursery-card-parent">
          <div className="nursery-card">
            {populatePlants}
          </div>
        </div>
      </>
    )
  }
}
