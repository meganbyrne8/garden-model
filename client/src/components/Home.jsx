import React, { Component } from 'react'
import { Route } from "react-router-dom"

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
          <h2>Login here</h2>
        )} />
      </main>
    )
  }
}
