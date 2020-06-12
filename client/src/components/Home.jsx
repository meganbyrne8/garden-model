import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { getAllGardens, createGarden, deleteGarden } from '../services/gardens'
import Layout from "./shared/Layout"
import SignIn from "./userAuth/SignIn"
import SignUp from "./userAuth/SignUp"
import Nursery from "./nursery/Nursery"
import NurseryIndex from "./nursery/NurseryIndex"
import HomeInfo from "./HomeInfo"
import About from "./About"
import MyGarden from "./userAccount/MyGarden"
import AccountBubble from "./shared/AccountBubble"
import AddGarden from "./userAccount/AddGarden"

export default class Home extends Component {
  state = {
    gardens: []
  }

  async componentDidMount() {
    this.getGardens()
  }

  getGardens = async () => {
    const gardens = await getAllGardens()
    this.setState({ gardens })
  }

  postGarden = async (gardenData) => {
    const newGarden = await createGarden(gardenData)
    this.setState(prevState => ({
      gardens: [...prevState.gardens, newGarden]
    }))
  }

  deleteGarden = async (id) => {
    await deleteGarden(id)
    this.setState(prevState => ({
      gardens: prevState.gardens.filter(garden => garden.id !== id)
    }))
  }


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
            {
              this.props.currentUser
                ?
                <>
                  <AccountBubble currentUser={this.props.currentUser} />
                  <Route exact path='/myAccount'>
                    <MyGarden
                      currentUser={this.props.currentUser}
                      deleteGarden={this.deleteGarden}
                    />
                  </Route>
                </>
                :
                <Route exact path='/myAccount'>
                  <h2>This page is for users only. Please login or signup to see this page.</h2>
                </Route>
            }
          </header>

          <Route exact path='/plants/:id' component={NurseryIndex} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={HomeInfo} />
          <Route exact path='/new/garden'
            render={() => (
              <AddGarden
                {...this.props}
                currentUser={this.props.currentUser}
                postGarden={this.postGarden}
              />)}
          />


        </>
      </Layout>
    )
  }
}