import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Burger from 'react-css-burger';
import './HamburgerMenu.css'
export default class HamburgerMenu extends Component {
  state = {
    active: false,
    menuActive: false
  };

  render() {
    return (
      <>
        <Burger
          onClick={() => this.setState({ active: !this.state.active })}
          active={this.state.active}
          burger="spin"
          color="#AD2E74"
          hoverOpacity={0.8}
          scale={1.2}
          margin={0}
        />
        {
          this.state.active
            ?
            <div
              onClick={() => this.setState({ menuActive: !this.state.menuActive })}
              className="burger-menu"
            >
              <Link to='/plants'>
                <h4>The Nursery</h4>
              </Link>
              <Link to='/about'>
                <h4>About</h4>
              </Link>
              {
                this.props.currentUser
                  ?
                  <>
                    <h4 onClick={this.props.handleLogOut}>Logout</h4>
                  </>
                  :
                  <Link to='/user/login'>
                    <h4>
                      Sign In
                      </h4>
                  </Link>
              }
            </div>
            :
            <>
            </>
        }


      </>
    );
  }
}