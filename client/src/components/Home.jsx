import React, { Component } from 'react'
import { Route } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default class Home extends Component {
  state = {

  }


  render() {
    return (
      <main>
        <Route path='/user/login' render={() => (
          <SignIn handleLoginSubmit={this.props.handleLoginSubmit} />
        )} />
        <Route path='/user/signup' render={() => (
          <SignUp
            handleSignUpSubmit={this.props.handleSignUpSubmit}
          />
        )} />
      </main>
    )
  }
}
