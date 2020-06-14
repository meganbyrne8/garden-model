import React, { Component } from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-div">
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="groove"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(184,28,223,0.47)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="groove"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(184,28,223,0.47)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="groove"
            icon="github"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(184,28,223,0.47)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
      </footer>
    )
  }
}
