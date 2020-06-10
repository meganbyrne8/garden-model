import React, { Component } from 'react'
import { Route } from "react-router-dom"
import SignIn from "./SignIn"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <main>
        <Route path='/user/login' render={() => (
          <SignIn />
        )} />
      </main>
    )
  }
}
