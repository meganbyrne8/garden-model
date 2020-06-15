import React, { Component } from 'react'
import { getOnePlant } from '../../services/plants'
import './NurseryIndex.css'


export default class NurseryIndex extends Component {
  state = {
    name: '',
    genus: '',
    description: '',
    imageurl: '',
    plantingnotes: ''
  }

  async componentDidMount() {
    const plant = await getOnePlant(this.props.match.params.id)
    this.setState({
      name: plant.name,
      genus: plant.genus,
      description: plant.description,
      imageurl: plant.imageurl,
      plantingnotes: plant.plantingnotes
    })
  }



  render() {
    return (
      <div className="nursery-index-parent">
        <div className="nursery-index-image">
          <img src={this.state.imageurl} alt="various plants" />
        </div>
        <div className="nursery-index-info">
          <h3>{this.state.name}</h3>
          <p className="genus">{this.state.genus}</p>
          <p>{this.state.description}</p>
          <p>{this.state.plantingnotes}</p>
        </div>
      </div>
    )
  }
}
