import React from 'react';
import "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LinkedIn from "../images/icons/linkedin.svg"
import GitHub from "../images/icons/github.svg"
import Medium from "../images/icons/medium.svg"
import Gmail from "../images/icons/gmail.svg"
import { Link } from "gatsby"

const Contact = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <div id="contact-body">
                <h1 className="marker-font" id="contact-header">Contact Me</h1>
                <div className="contact-list">
                    <a href="https://www.linkedin.com/in/kunalshah-6593/" target="_blank">
                        <div className="contact-item">
                            <LinkedIn className="icon" fill="#D48C63" />
                            <p>LinkedIn</p>
                        </div>
                    </a>
                    <a href="https://github.com/kdshah6593" target="_blank">
                        <div className="contact-item">
                            <GitHub className="icon" fill="#D48C63" />
                            <p>GitHub</p>
                        </div>
                    </a>
                    <a href="mailto:kdshah6593@gmail.com" target="_blank">
                        <div className="contact-item">
                            <Gmail className="icon" fill="#D48C63" />
                            <p>Email Me</p>
                        </div>
                    </a>
                </div>
                <h2 className="marker-font" id="contact-subheader">Check out My Blog</h2>
                <div className="contact-list">
                    <a href="https://kdshah6593.medium.com/" target="_blank">
                        <div className="contact-item">
                            <Medium className="icon" fill="#D48C63" />
                            <p>Medium</p>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default Contact