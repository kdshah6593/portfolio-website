import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, menuLinks }) => (
  <header style={{ background: `#E4E4E4`, marginBottom: `1rem`, display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
    <div style={{ marginLeft: `1rem`, paddingTop: `0.5rem` }}>
      <h1>
        <Link to="/" style={{ color: `#6184d4`, textDecoration: `none`, }}>
          <StaticImage
            src="../images/ks-logo-orange-grey-cropped.png"
            width={150}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="KS Logo"
          />
        </Link>
      </h1>
    </div>
    <nav>
      <ul style={{ display: "flex", flexDirection: `row`, paddingTop: `1.5rem` }}>
        {menuLinks.map(link => (
          <li key={link.name} className = "click">
            <Link className="nav-btn" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
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
