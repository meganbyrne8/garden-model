import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Layout from "./shared/Layout"
import SignIn from "./userAuth/SignIn"
import SignUp from "./userAuth/SignUp"
import Nursery from "./nursery/Nursery"
import NurseryIndex from "./nursery/NurseryIndex"
import HomeInfo from "./HomeInfo"
import About from "./About"

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        handleLogOut={this.props.handleLogOut}
      >
        <>
          <header>
            <Route exact path='/user/login' render={() => (
              <SignIn handleLoginSubmit={this.props.handleLoginSubmit} />
            )}
            />

            <Route path='/user/signup' render={() => (
              <SignUp
                handleSignUpSubmit={this.props.handleSignUpSubmit} />
            )}
            />

            <Route exact path='/plants' component={Nursery} />
          </header>

          <Route exact path='/plants/:id' component={NurseryIndex} />
          <Route exact path='/about' component={About} />
          <Route exact path="/" component={HomeInfo} />

        </>
      </Layout>
    )
  }
}
