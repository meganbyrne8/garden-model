import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div>
      <Link to='/'>
        <h1>My Garden</h1>
      </Link>
      <Link to='/plants'>The Nursery</Link>
      <br />
      <Link to='/about'>About</Link>
      <br />
      <Link to='/user/login'>Sign In</Link>
      <hr />
      {/* remove the hr tag */}
    </div>
  )
}
