import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllGardens, deleteGarden } from '../../services/gardens'
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
          <h3>My Gardens</h3>
          <Link to='/new/garden'>
            <span>&#43;</span>
          </Link>
          <div>
            {
              gardens.map(garden => (
                <React.Fragment key={garden.id}>
                  <p>{garden.name}</p>
                  {
                    currentUser && currentUser.id === garden.user_id && (
                      <>
                        <button>Edit</button>
                        <button onClick={() => deleteGarden(garden.id)}>Delete</button>
                      </>
                    )
                  }
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="x-axis">
          <h3>My Plants</h3>
          <span>&#43;</span>
          <span>&#9998;</span>
          <div>
            <PlantTable />
          </div>
        </div>
      </div>

    )
  }
}