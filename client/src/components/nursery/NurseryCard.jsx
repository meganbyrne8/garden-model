import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NurseryCard extends Component {
  state = {
    url: ''
  }

  async componentDidMount() {
    this.setState({
      url: '/plants/' + this.props.id
    })
  }


  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <Link to={this.state.url}>
          <img src={this.props.imageurl} />
        </Link>
        <p>{this.props.genus}</p>
        <p>{this.props.description}</p>
        <p>{this.props.plantingnotes}</p>
      </div>
    )
  }
}
