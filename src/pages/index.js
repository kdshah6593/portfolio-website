import * as React from "react"
import "../components/styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="index-body">
      <h1 className="marker-font" id="index-header">Hi, I'm Kunal</h1>
      <hr style={{ width:`50%`, height: `5px`, marginLeft:`25%`, backgroundColor:`#D48C63` }}></hr>
      <h3 id="index-subheader">Full Stack Web Developer</h3>
      <hr style={{ width:`50%`, height: `2px`, marginLeft:`25%`, backgroundColor:`#D48C63` }}></hr>
      <h5 id="index-subtitle">Let's build something great together.</h5>
    </div>
  </Layout>
)

export default IndexPage
