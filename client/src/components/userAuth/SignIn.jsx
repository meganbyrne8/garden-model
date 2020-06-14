import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

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
    const { handleLoginSubmit, history } = this.props

    return (
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleLoginSubmit(this.state)
          history.push('/myAccount')
          this.setState({
            username: "",
            password: ""
          })
        }}>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <Link to='/user/signup'>Sign Up </Link>
      </form>
    )
  }
}
