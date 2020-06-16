import React, { Component } from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-div">
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(67,38,77,1)"
            borderWidth="5"
            borderStyle="double"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(163,38,204,1)"
            iconSize="5"
            roundness="50%"
            url="https://www.linkedin.com/in/megan-j-byrne/"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(67,38,77,1)"
            borderWidth="5"
            borderStyle="double"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(163,38,204,1)"
            iconSize="5"
            roundness="50%"
            url="https://twitter.com/_mbyrne"
            size="35" />
        </div>
        <div className="social-media-icons">
          <SocialMediaIconsReact
            borderColor="rgba(67,38,77,1)"
            borderWidth="5"
            borderStyle="double"
            icon="github"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(163,38,204,1)"
            iconSize="5"
            roundness="50%"
            url="https://github.com/meganbyrne8/garden-model"
            size="35" />
        </div>
      </footer>
    )
  }
}
