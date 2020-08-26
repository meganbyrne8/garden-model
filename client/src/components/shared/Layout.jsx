import React from 'react'
import Header from "./Header"
import Footer from "./Footer";
import AccountBubble from "./AccountBubble"

export default function Layout(props) {
  return (
    <div>
      <Header
        currentUser={props.currentUser}
        handleLogOut={props.handleLogOut}
      />
      <div className="samplediv" style={{margin: `1em 0 10em 0`}}>
        {
          props.currentUser ?
            <AccountBubble />
            :
            <></>
        }
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

