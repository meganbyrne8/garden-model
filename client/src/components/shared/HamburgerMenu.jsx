import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Media from 'react-media';
import './HamburgerMenu.css'


export default class HamburgerMenu extends Component {
  state = {
    isOpen: false
  }


  showSettings(event) {
    event.preventDefault();

  }

  openMenu() {
    this.setState({
      isOpen: true
    })
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu width={100} className="burger-menu" onClick={this.openMenu} customBurgerIcon={<span>&#9776</span>}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}