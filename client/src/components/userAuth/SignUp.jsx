import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    const { username, email, password } = this.state;
    const { handleSignUpSubmit } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSignUpSubmit(this.state)
      }}>
        <h3>Sign Up</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email" >email:</label>
        <input
          id="email"
          type="email"
          value={email}
          name="email"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password" >password:</label>
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
