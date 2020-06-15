import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllGardens } from '../../services/gardens'
import PlantTable from './PlantTable'
import './MyGarden.css'

export default class MyGarden extends Component {
  state = {
    gardens: []
  }

  async componentDidMount() {
    this.getGardens()
  }

  getGardens = async () => {
    const gardens = await getAllGardens()
    this.setState({ gardens })
  }


  render() {
    const { gardens } = this.state
    const { currentUser, deleteGarden } = this.props

    return (

      <div className="garden-parent-div">

        <div className="y-axis">
          <div className="title-section-garden-page">
            <h3>My Gardens</h3>
            <Link to='/new/garden'>
              <span>&#10133;</span>
            </Link>
          </div>

          <div>
            {
              gardens.map(garden => (
                <div className="gardens-mapped">
                  <React.Fragment key={garden.id}>
                    <p>{garden.name}</p>
                    {
                      currentUser && currentUser.id === garden.user_id && (
                        <div className="edit-delete-buttons">
                          <Link to={'/gardens/' + garden.id + '/edit'} >
                            <span>&#9998;</span>
                          </Link>
                          <span
                            onClick={() =>
                              deleteGarden(garden.id)
                            }>
                            &#10008;
                            </span>
                        </div>
                      )
                    }
                  </React.Fragment>
                </div>
              ))
            }
          </div>
        </div>

        <div className="x-axis">
          <div className="x-axis-title">
            <h3>My Plants</h3>
            <div className="x-axis-edit-delete">
              <span>&#9998;</span>
              <span>&#10133;</span>
            </div>
          </div>
          <div className="plant-table-div">
            <PlantTable />
          </div>
        </div>
      </div>

    )
  }
}