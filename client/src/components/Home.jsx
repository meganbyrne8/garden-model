import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Header from "./shared/Header"
import SignIn from "./userAuth/SignIn"
import SignUp from "./userAuth/SignUp"
import Nursery from "./nursery/Nursery"
import NurseryIndex from "./nursery/NurseryIndex"
import MyGarden from "./userAccount/MyGarden"
import HomeInfo from "./HomeInfo"
import About from "./About"
import Footer from "./shared/Footer"

export default class Home extends Component {
  state = {

  }


  render() {
    return (
      <>
        <main>

          <Route exact path="/">
            <Header />
          </Route>

          <Route exact path='/user/login' render={() => (
            <SignIn handleLoginSubmit={this.props.handleLoginSubmit} />
          )} />
          <Route path='/user/signup' render={() => (
            <SignUp
              handleSignUpSubmit={this.props.handleSignUpSubmit}
            />
          )} />

          <Route exact path='/nursery' render={() => (
            <Nursery
              handleGetAllPlants={this.props.handleGetAllPlants}
            />
          )} />


          <Route exact path='/nursery/index'>
            <NurseryIndex />
          </Route>

        </main>

        <Route exact path='/myAccount'>
          <MyGarden />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path="/">
          <HomeInfo />
        </Route>

        <Route>
          <Footer />
        </Route>

      </>
    )
  }
}
