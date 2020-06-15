import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { getAllGardens, createGarden, deleteGarden, updateGarden } from '../services/gardens'
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
import EditGarden from "./userAccount/EditGarden"


export default class Home extends Component {
  state = {
    gardens: [],
    isLoading: false
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

  putGarden = async (id, gardenData) => {
    const updatedGarden = await updateGarden(id, gardenData)
    this.setState(prevState => ({
      gardens: prevState.gardens.map(garden => garden.id === id ? updatedGarden : garden)
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
                <Route exact path='/myAccount'>
                  <MyGarden
                    currentUser={this.props.currentUser}
                    deleteGarden={this.deleteGarden}
                    isLoading={this.state.isLoading}
                  />
                </Route>
              </>
              :
              <Route exact path='/myAccount'>
                <h4>You may not have acess to see this page. Please login to see this page. If this problem persists, please reach out to our team.</h4>
              </Route>
          }

          <Route exact path='/plants/:id' component={NurseryIndex} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={HomeInfo} />

          <Route exact path='/new/garden'
            render={(props) => (
              <AddGarden
                {...props}
                currentUser={this.props.currentUser}
                postGarden={this.postGarden}
              />)}
          />

          <Route exact path='/gardens/:id/edit'
            render={(props) => {
              const gardenId = props.match.params.id
              const garden = this.state.gardens.find(garden => garden.id === parseInt(gardenId))
              return <EditGarden
                {...props}
                garden={garden}
                currentUser={this.props.currentUser}
                updateGarden={this.putGarden}
              />
            }}
          />

        </>
      </Layout>
    )
  }
}