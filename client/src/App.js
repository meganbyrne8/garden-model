import React, { Component } from 'react'
import Home from "./components/Home"
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

export default class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleSignUpSubmit = async (signUpData) => {
    const currentUser = await registerUser(signUpData);
    this.setState({ currentUser })
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
    removeToken()
  }

  handleVerify = async () => {
    const currentUser = await verifyUser()
    this.setState({ currentUser })
  }


  render() {
    return (
      <div>
        <Home
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          handleGetSinglePlant={this.handleGetSinglePlant}
          currentUser={this.state.currentUser}
          handleLogOut={this.handleLogOut}
        />
      </div>
    )
  }
}
