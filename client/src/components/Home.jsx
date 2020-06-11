import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Layout from "./shared/Layout"
import SignIn from "./userAuth/SignIn"
import SignUp from "./userAuth/SignUp"
import Nursery from "./nursery/Nursery"
import NurseryIndex from "./nursery/NurseryIndex"
import MyGarden from "./userAccount/MyGarden"
import HomeInfo from "./HomeInfo"
import About from "./About"

export default class Home extends Component {


  render() {
    return (
      <Layout>
        <>
          <main>

            <Route exact path='/user/login' render={() => (
              <SignIn handleLoginSubmit={this.props.handleLoginSubmit} />
            )} />
            <Route path='/user/signup' render={() => (
              <SignUp
                handleSignUpSubmit={this.props.handleSignUpSubmit}
              />
            )} />

            <Route exact path='/plants' component={Nursery} />
          </main>

          <Route exact path='/plants/:id' component={NurseryIndex} />


          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path="/">
            <HomeInfo />
          </Route>

        </>
      </Layout>
    )
  }
}
