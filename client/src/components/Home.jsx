import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Layout from "./shared/Layout"
import SignIn from "./userAuth/SignIn"
import SignUp from "./userAuth/SignUp"
import Nursery from "./nursery/Nursery"
import NurseryIndex from "./nursery/NurseryIndex"
import HomeInfo from "./HomeInfo"
import About from "./About"
import MyGarden from "./userAccount/MyGarden"
import AccountBubble from "./shared/AccountBubble"

export default class Home extends Component {


  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        handleLogOut={this.props.handleLogOut}
      >
        <>
          <header>
            <Route exact path='/user/login'
              render={(props) => (
                <SignIn
                  {...props}
                  handleLoginSubmit={this.props.handleLoginSubmit} />
              )}
            />
            <Route path='/user/signup'
              render={(props) => (
                <SignUp
                  {...props}
                  handleSignUpSubmit={this.props.handleSignUpSubmit} />
              )}
            />
            <Route exact path='/plants' component={Nursery} />
          </header>

          <Route exact path='/plants/:id' component={NurseryIndex} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={HomeInfo} />
          {
            this.props.currentUser
              ?
              <>
                <AccountBubble />
                <Route exact path='/myAccount' component={MyGarden} />
              </>
              :
              <Route exact path='/myAccount'>
                <h2>This page is for users only. Please login or signup to see this page.</h2>
              </Route>
          }

        </>
      </Layout>
    )
  }
}