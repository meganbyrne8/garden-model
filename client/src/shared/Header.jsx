import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div>
      <h1>My Garden</h1>
      <Link to='/user/login'>Sign In</Link>
      <hr />
      {/* remove the hr tag */}
    </div>
  )
}
