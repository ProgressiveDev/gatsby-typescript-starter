import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const Contact: React.FC = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
    </Layout>
  )
}

export default Contact
