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
import PostgreSQL from "../images/icons/postgresql.svg"


const About = () => {
    return (
        <Layout>
            <Seo title="About" />
            <div id="about-body">
                <div id="about-container">
                    <div className="about-container-element" id="about-profile-image">
                        <StaticImage
                            src="../images/kunal-shah-greyed.png"
                            layout="constrained"
                            width={1000}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Kunal Shah Profile Picture"  
                        />
                    </div>
                    <div className="about-container-element" id="about-text-container">
                        <h1 className="marker-font" id="about-header">About Me.</h1>
                        <p id="about-paragraph" className="montserrat-font">I am a driven Full-Stack web developer / Software Engineer skilled in React and Rails that strives to write clean, efficient code. I have passionate aspirations to help build and develop apps that positively impact people - either in their day-to-day life or on a global level. I strive to construct apps that increase quality of life and productivity of people using programming to either simplify tasks, expand accessibility of information or solve ongoing issues. 
                        <br/><br/> 
                        I'm an innately curious person always eager to learn something new. I've always wanted to build something with my hands, but I was no crafstman. Programming allows me to develop, design and construct. Creating that first CLI project and seeing it work in my terminal - something built (or typed) by my own hands - I was hooked. 
                        <br/><br/>
                        &#127944; Pittsburgh Steelers and &#128039; Pittsburgh Penguins Fan | Lover of Tacos &#127790; | League of Legends Gamer &#127918; | Tennis Player &#127934;
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="centered text-color marker-font" id="tech-skills-header">Technical Skills</h2>
                    <div id="technical-skills">
                        <div className="tech-skill">
                            <ReactIcon className="icon"  fill="#D48C63" />
                            <p>React</p>
                        </div>
                        <div className="tech-skill">
                            <Redux className="icon" fill="#D48C63" />
                            <p>Redux</p>
                        </div>
                        <div className="tech-skill">
                            <Rails className="icon" fill="#D48C63" />
                            <p>Rails</p>
                        </div>
                        <div className="tech-skill">
                            <JavaScript className="icon" fill="#D48C63" />
                            <p>JavaScript</p>
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
                            <PostgreSQL className="icon" fill="#D48C63" />
                            <p>PostgreSQL</p>
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