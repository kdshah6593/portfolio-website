import React from 'react';
import "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"
import StudyDecks from "../images/studydecks_main.png"

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
width: 50%;
`

const CardWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding: 10px;
margin-bottom: 1rem;
border: 5px solid #000;
border-radius: 1rem;
background: #D48C63;
`

const CardText = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
text-align: center;
width: 60%;
`

const CardImage = styled.img`
width: 40%;
height: 90%;
padding: 5px;
border-radius: 10px;
margin: 0;
`

const CardTitle = styled.h2`
font-family: "Nova Flat";
margin-bottom: 1rem;
color: #fff;
`

const CardDescription = styled.p`
flex-grow: 2;
margin-bottom: 0.5rem;
color: #fff;
`

const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const CardLink = styled(Link)`
border: 2px solid #000;
border-radius: 3rem;
text-decoration: none;
padding: 0 1rem;
margin: 0 5px;
background: #fff;
color: #000;
font-family: "Nova Flat";
font-size: 16px;
&:hover {
    background: #6385D4;
    color: #fff;
}
`

const LiveProject = (props) => (
    <CardWrapper>
        <CardImage src={props.image} />
        <CardText>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
            <LinkWrapper>
                <CardLink to={props.frontend} target="_blank">Front End Code</CardLink>
                <CardLink to={props.backend} target="_blank">Back End Code</CardLink>
                <CardLink to={props.hosted} target="_blank">Live Site</CardLink>
            </LinkWrapper>
        </CardText>
    </CardWrapper>
)

const NotLiveProject = (props) => (
    <CardWrapper>
        <CardImage src={props.image} />
        <CardText>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
            <LinkWrapper>
                <CardLink to="#" target="_blank">Source Code</CardLink>
            </LinkWrapper>
        </CardText>
    </CardWrapper>
)

const Projects = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <div id="project-body">
                <h1 className="marker-font" id="project-header">Projects</h1>
                <CardContainer>
                    <LiveProject
                        title="The Sports Report"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        frontend="https://github.com/kdshah6593/the-sports-report-frontend"
                        backend="https://github.com/kdshah6593/the-sports-report-backend"
                        hosted="https://the-sports-report.herokuapp.com"
                        image={StudyDecks}
                    />
                    <LiveProject
                        title="StudyDecks"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        frontend="https://github.com/kdshah6593/studydecks-frontend"
                        backend="https://github.com/kdshah6593/studydecks-backend"
                        hosted="https://studydecks.herokuapp.com"
                        image={StudyDecks}
                    />
                    <NotLiveProject
                        title="Stock Tracker"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={StudyDecks}
                    />
                    <NotLiveProject
                        title="FiTracker"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={StudyDecks}
                    />
                    <NotLiveProject
                        title="LOL Champions"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={StudyDecks}
                    />
                </CardContainer>
            </div>
        </Layout>
    )
}

export default Projects