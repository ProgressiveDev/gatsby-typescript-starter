import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const About: React.FC = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        <Link to="contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default About
