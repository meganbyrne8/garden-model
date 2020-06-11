import React, { Component } from 'react'


export default class NurseryCard extends Component {
  state = {
    url: ''
  }

  async componentDidMount() {
    this.setState({
      url: '/nursery' + this.props.id
    })
  }


  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <img src={this.props.imageurl} />
        <p>{this.props.genus}</p>
        <p>{this.props.description}</p>
        <p>{this.props.plantingnotes}</p>
      </div>
    )
  }
}
