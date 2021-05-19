import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle, menuLinks }) => (
  <header style={{ background: `#E4E4E4`, marginBottom: `1rem`, display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
    <div style={{ marginLeft: `1rem`, paddingTop: `0.5rem` }}>
      <h1>
        <AniLink cover direction="down" bg="#D48C63" to="/">
          <StaticImage
            src="../images/ks-logo-orange-grey-cropped.png"
            width={150}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="KS Logo"
          />
        </AniLink>
      </h1>
    </div>
    <nav>
      <ul style={{ display: "flex", flexDirection: `row`, paddingTop: `1.5rem` }}>
        <li className = "click">
          <AniLink className="nav-btn" cover direction="up" bg="#D48C63" to="/about">
            About
          </AniLink>
        </li>
        <li className = "click">
          <AniLink className="nav-btn" cover direction="right" bg="#D48C63" to="/projects">
            Projects
          </AniLink>
        </li>
        <li className = "click">
          <AniLink className="nav-btn" cover direction="left" bg="#D48C63" to="/contact">
            Contact
          </AniLink>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
