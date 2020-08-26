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
      <div className="samplediv" style={{height: `75vh`}}>
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

