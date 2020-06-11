import React, { Component } from 'react'
import Home from "./components/Home"
import { loginUser, registerUser } from './services/auth'
import { getAllPlants } from './services/plants'

export default class App extends Component {
  state = {
    currentUser: null,
    allPlants: null
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleSignUpSubmit = async (signUpData) => {
    const currentUser = await registerUser(signUpData);
    this.setState({ currentUser })
  }

  handleGetAllPlants = async () => {
    const allPlants = await getAllPlants()
    this.setState({ allPlants })
  }


  render() {
    return (
      <div>
        <Home
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          handleGetAllPlants={this.handleGetAllPlants}
        />
      </div>
    )
  }
}
