import React from 'react'
import { Link } from 'react-router-dom'

export default function header(props) {
  return (
    <div>
      <Link to='/'>
        <h1>My Garden</h1>
      </Link>
      <Link to='/plants'>The Nursery</Link>
      <Link to='/about'>About</Link>
      {
        props.currentUser
          ?
          <>
            <button onClick={props.handleLogOut}>Logout</button>
          </>
          :
          <Link to='/user/login'>Sign In</Link>
      }
    </div>
  )
}
