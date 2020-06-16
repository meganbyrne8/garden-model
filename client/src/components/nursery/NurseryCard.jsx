import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NurseryCard.css'

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
      <div className="nursery-card-single">
        <div className="nursery-card-image">
          <Link to={this.state.url}>
            <img src={this.props.imageurl} alt="various plant images" />
          </Link>
        </div>
        <div className="nursery-card-info">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    )
  }
}
