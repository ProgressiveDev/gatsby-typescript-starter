import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout: React.FC = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
