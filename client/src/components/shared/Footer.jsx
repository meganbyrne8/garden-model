import React, { Component } from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-div">
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(255,255,255,1)"
            borderWidth="5"
            borderStyle="double"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(186,121,139,1)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(255,255,255,1)"
            borderWidth="5"
            borderStyle="double"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(186,121,139,1)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(255,255,255,1)"
            borderWidth="5"
            borderStyle="double"
            icon="github"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(186,121,139,1)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="35" />
        </div>
      </footer>
    )
  }
}
