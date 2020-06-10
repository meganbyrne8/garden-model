import React, { Component } from 'react'

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
    const { username, password } = this.state;

    return (
      <form>
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
      </form>
    )
  }
}
