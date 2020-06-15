import React, { Component } from 'react'
import './PlantTable.css'

export default class PlantTable extends Component {
  render() {
    return (
      <div className="plant-form">
        <form>
          <label>
            <div className="plant-div-item">
              <p>Rosemary Bush</p>
            </div>
            <div className="plant-div-item-even">
              <p>Dahlia</p>
            </div>
            <div className="plant-div-item">
              <p>Texas Bluebells</p>
            </div>
            <div className="plant-div-item-even">
              <p>Snapdragon</p>
            </div>
            <div className="plant-div-item">
              <p>Peonies</p>
            </div>
            <div className="plant-div-item-even">
              <p>Hibiscus Flower</p>
            </div>
          </label>
        </form>
      </div>
    )
  }
}
