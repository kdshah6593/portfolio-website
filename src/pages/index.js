import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="marker-font" id="index-header">Hi, I'm Kunal</h1>
    <h3 className="text-color centered nova-font">Full Stack Web Developer</h3>
    <p className="text-color centered nova-font">Let's build something great together.</p>
  </Layout>
)

export default IndexPage
