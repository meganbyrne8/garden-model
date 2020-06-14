import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AccountBubble.css'

export default class AccountBubble extends Component {
  render() {
    return (
      <div>
        <Link to='/myAccount'>
          <button className="account-button">Home</button>
        </Link>
      </div>
    )
  }
}
