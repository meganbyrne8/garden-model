import React, { Component } from 'react'


export default class AddGarden extends Component {
  state = {
    name: ''
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
    this.props.history.push('/')
    this.setState({
      name: '',
      created: true
    })
  }

  render() {
    const { name } = this.state

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