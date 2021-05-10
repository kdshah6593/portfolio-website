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
      <ul style={{ display: "flex", flexDirection: `row`, paddingTop: `1.5rem` }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `0.5rem 1rem 0.5rem 1rem`,
              textAlign: `center`,
              background: `#6184d4`,
              marginRight: `10px`,
              width: `10rem`,
              border: `2px solid #6184d4`,
              borderRadius: `30px`,

            }}
          >
            <Link style={{ color: `#fff`, textDecoration: `none` }} to={link.link}>
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
