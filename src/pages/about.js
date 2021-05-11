import React from 'react';
import "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Redux from "../images/icons/redux.svg"
import Rails from "../images/icons/rubyonrails.svg"
import Icon from "../images/icons/react-brands.svg"

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
                            <Redux/>
                            <Rails/>
                            <Icon />
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default About