import React, { Component } from 'react'
import './PlantTable.css'

export default class PlantTable extends Component {
  render() {
    return (
      <div className="plant-table-div">
        <table className="plant-table">

          <thead>
            <tr className="plant-table-odd">
              <th>Plant</th>
              <th>Season</th>
              <th>Planting Distance</th>
              <th>Watering Frequency</th>
              <th>Planting Notes</th>
            </tr>
          </thead>

          <tbody>
            <tr className="plant-table-even">
              <td>Dahilia</td>
              <td>Spring</td>
              <td>6"</td>
              <td>2x per day</td>
              <td>fragile stems, reinforce with toothpicks</td>
            </tr>
            <tr className="plant-table-odd">
              <td>Strawberry</td>
              <td>Spring</td>
              <td>10"</td>
              <td>1x per day</td>
              <td>Strawberries are fragile to moths, mold and overwatering. One way to avoid overwatering is to plant strawberries in hanging plants.</td>
            </tr>
            <tr className="plant-table-even">
              <td>Montbreia</td>
              <td>Spring</td>
              <td>2"</td>
              <td>1x per day</td>
              <td>Montbreia can be invasive, so be sure to keep them isolated to their own planter to avoid any contaiminating! We also reccomend nets to prevent pollen and seed dispersal.</td>
            </tr>
            <tr className="plant-table-odd">
              <td>Texas Bluebells</td>
              <td>Spring</td>
              <td>4"</td>
              <td>1x per day</td>
              <td>Texas bluebells need a lot of sunlight. Once they are planted and flowering, they'll come back every year. </td>
            </tr>
          </tbody>

        </table>
      </div>
    )
  }
}
