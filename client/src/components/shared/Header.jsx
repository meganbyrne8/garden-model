import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import './Header.css'


export default class Header extends Component {
  state = {
    isOpen: false
  }

  openMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='header-super-parent'>
        <div className="header-div">

          <div className="logo">
            <Link to='/'>
              <h2>
                Garden Modeling
              </h2>
            </Link>
          </div>

          <div className="headerlinks">
            <Link to='/plants'>The Nursery</Link>
            <Link to='/about'>About</Link>
            {
              this.props.currentUser
                ?
                <>
                  <Link to='/' onClick={this.props.handleLogOut}>Logout</Link>
                </>
                :
                <Link to='/user/login'>Sign In</Link>
            }
          </div>
          <div className="burger-menu">
            <HamburgerMenu
              openMenuToggle={this.openMenu}
              currentUser={this.props.currentUser}
              handleLogOut={this.props.handleLogOut}
            />
          </div>
        </div>
      </div>
    )
  }
}


