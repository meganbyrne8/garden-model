import React, { Component } from 'react'
import Header from './shared/Header'
import Home from "./components/Home"

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}
