import React, { Component } from 'react'
import Home from "./components/Home"
import { loginUser, registerUser } from './services/auth'

export default class App extends Component {
  state = {
    currentUser: null,
    singlePlant: []
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleSignUpSubmit = async (signUpData) => {
    const currentUser = await registerUser(signUpData);
    this.setState({ currentUser })
  }


  render() {
    return (
      <div>
        <Home
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          handleGetSinglePlant={this.handleGetSinglePlant}
        />
      </div>
    )
  }
}
