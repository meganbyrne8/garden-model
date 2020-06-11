import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AccountBubble extends Component {
  render() {
    return (
      <div>
        <Link to='/myAccount'>
          <button>M</button>
        </Link>
      </div>
    )
  }
}
