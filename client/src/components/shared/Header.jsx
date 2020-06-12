import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import './Header.css'


export default class Header extends Component {
  state = {
    isOpen: false
  }

  openMenu = () => {
    // can I pass in a screensize as a jsx element
    // is there a way to base this on a media query? Like a screen size? 
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="header-div">

          <div className="logo">
            <Link to='/'>
              <h1>My Garden</h1>
            </Link>
          </div>

          <div className="headerlinks">
            <Link to='/plants'>The Nursery</Link>
            <Link to='/about'>About</Link>
            {
              this.props.currentUser
                ?
                <>
                  <button onClick={this.props.handleLogOut}>Logout</button>
                </>
                :
                <Link to='/user/login'>Sign In</Link>
            }
          </div>
          <div>
            <HamburgerMenu openMenuToggle={this.openMenu} className="hamburger" />
          </div>
        </div>
      </div>
    )
  }
}


// Citing code for the hamburger menu: https://github.com/negomi/react-burger-menu#animations