import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <header style={{ background: `#000`, marginBottom: `1rem`, display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
    <div style={{ marginLeft: `1rem`, paddingTop: `0.5rem` }}>
      <h1 style={{ paddingTop: `1rem` }}>
        <Link to="/" style={{ color: `#6184d4`, textDecoration: `none`, }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul style={{ display: "flex", flexDirection: `row`, paddingTop: `1rem` }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem 1rem 0rem 1rem`,
            }}
          >
            <Link style={{ color: `#6184d4` }} to={link.link}>
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
