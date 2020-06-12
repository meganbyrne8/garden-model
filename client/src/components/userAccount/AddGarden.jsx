import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class AddGarden extends Component {
  state = {
    name: '',
    created: false
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.postGarden(this.state)
    this.setState({
      name: '',
      created: true
    })
  }

  render() {
    const { name, created } = this.state

    if (created) {
      return <Redirect to={`/myAccount`} />
    }

    return (
      <div>
        <h3>Create A New Garden</h3>

        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange} />
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
