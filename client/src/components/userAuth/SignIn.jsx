import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    const { username, password } = this.state
    const { handleLoginSubmit } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleLoginSubmit(this.state)
      }}>
        <h3>Login</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={this.handleChange}
        />
        <label htmlFor="password" >password:</label>
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          onChange={this.handleChange}
        />
        <Link to='/user/signup'>Sign Up </Link>
        <button>Submit</button>
      </form>
    )
  }
}
