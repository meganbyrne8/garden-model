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
          <h3>My Gardens</h3>
          <Link to='/new/garden'>
            <span>&#10133;</span>
          </Link>
          <div>
            {
              gardens.map(garden => (
                <React.Fragment key={garden.id}>
                  <p>{garden.name}</p>
                  {
                    currentUser && currentUser.id === garden.user_id && (
                      <>
                        <Link to={'/gardens/' + garden.id + '/edit'} >
                          <span>&#9998;</span>
                        </Link>
                        <span onClick={() => deleteGarden(garden.id)}>&#10060;</span>
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
          <span>&#10133;</span>
          <span>&#9998;</span>
          <div>
            <PlantTable />
          </div>
        </div>
      </div>

    )
  }
}