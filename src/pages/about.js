import React from 'react';
import "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Redux from "../images/icons/redux.svg"
import Rails from "../images/icons/rubyonrails.svg"
import ReactIcon from "../images/icons/react-brands.svg"
import Html5 from "../images/icons/html5.svg"
import Css3 from "../images/icons/css3.svg"
import JavaScript from "../images/icons/javascript.svg"
import Bootstrap from "../images/icons/bootstrap.svg"
import Gatsby from "../images/icons/gatsby.svg"
import MaterialUI from "../images/icons/material-ui.svg"
import SQLite from "../images/icons/sqlite.svg"


const About = () => {
    return (
        <Layout>
            <Seo title="About" />
            <div id="about-body">
                <div id="about-container">
                    <StaticImage
                        src="../images/kunal-shah-greyed.png"
                        width={900}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Kunal Shah Profile Picture"
                        className="about-container-element"
                    />
                    <div className="about-container-element" id="about-text-container">
                        <h1 className="marker-font" id="about-header">About Me.</h1>
                        <p style={{paddingRight: `5rem` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="centered text-color marker-font" id="tech-skills-header">Technical Skills</h2>
                    <div id="technical-skills">
                        <div className="tech-skill">
                            <Redux className="icon" fill="#D48C63" />
                            <p>Redux</p>
                        </div>
                        <div className="tech-skill">
                            <Rails className="icon" fill="#D48C63" />
                            <p>Rails</p>
                        </div>
                        <div className="tech-skill">
                            <ReactIcon className="icon"  fill="#D48C63" />
                            <p>React</p>
                        </div>
                        <div className="tech-skill">
                            <Html5 className="icon" fill="#D48C63" />
                            <p>HTML5</p>
                        </div>
                        <div className="tech-skill">
                            <Css3 className="icon" fill="#D48C63" />
                            <p>CSS3</p>
                        </div>
                        <div className="tech-skill">
                            <JavaScript className="icon" fill="#D48C63" />
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-skill">
                            <Bootstrap className="icon" fill="#D48C63" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="tech-skill">
                            <Gatsby className="icon" fill="#D48C63" />
                            <p>Gatsby</p>
                        </div>
                        <div className="tech-skill">
                            <MaterialUI className="icon" fill="#D48C63" />
                            <p>Material-UI</p>
                        </div>
                        <div className="tech-skill">
                            <SQLite className="icon" fill="#D48C63" />
                            <p>SQLite</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About