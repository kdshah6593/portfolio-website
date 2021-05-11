import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ color: `#D48C63`, textAlign: `center`}}>Hi, I'm Kunal</h1>
    <p style={{ color: `#D48C63`, textAlign: `center`}}>Welcome to my portfolio website.</p>
    <p style={{ color: `#D48C63`, textAlign: `center`}}>Let's build something great together.</p>
  </Layout>
)

export default IndexPage
