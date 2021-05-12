/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="site" style={{ margin: `0` }}>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <main className="site-content">{children}</main>
        <footer style={{ marginTop: `2rem`, background: `#D48C63`, textAlign: `center` }}>
          <p style={{color: '#E4E4E4', fontFamily: 'Nova Flat'}}>Designed by Kunal Shah</p>
          <p style={{color: '#E4E4E4', fontFamily: 'Nova Flat'}}>© {new Date().getFullYear()}, Built with
          {` `}
          <a style={{color: '#E4E4E4', fontFamily: 'Nova Flat'}} href="https://www.gatsbyjs.com">Gatsby</a></p>
          <a style={{color: '#E4E4E4', fontFamily: 'Nova Flat'}} href="https://github.com/kdshah6593/portfolio-website">Source Code</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
