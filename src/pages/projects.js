import React from 'react';
import "../components/styles.css"
import media from "../components/media"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import StudyDecks from "../images/studydecks_main.png"
import SportsReport from "../images/sports-report-articles.png"
import StockTracker from "../images/stock_tracker.png"
import FiTracker from "../images/fitracker.png"
import LOLChampions from "../images/lolchamps.png"

const moveRight = keyframes`
0% {
    opacity: 0;
    transform: translateX(-500px)
}

100% {
    opacity: 1;
    transform: translate(0);
}
`

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
${media.mobile`
    width: 100%;
`};
${media.desktop`
    width: 50%;
`};
`

const CardWrapper = styled.div.attrs(() =>({
    tabIndex: 0 }))`
display: flex;
width: 100%;
padding: 10px;
margin-bottom: 1rem;
border: 5px solid #000;
border-radius: 1rem;
background: #D48C63;
${media.mobile`
    flex-direction: column;
`};
${media.desktop`
    flex-direction: row;
`};
animation: ${moveRight} 1s ease-out;
& + & {
    animation: ${moveRight} 1.4s ease-out;
}
& + & + & {
    animation: ${moveRight} 1.8s ease-out;
}
& + & + & + & {
    animation: ${moveRight} 2.2s ease-out;
}
& + & + & + & + & {
    animation: ${moveRight} 2.6s ease-out;
}
`

const CardText = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
text-align: center;
${media.mobile`
    width: 100%;
`};
${media.desktop`
    width: 60%;
`};
`

const CardImage = styled.img`
height: 250px;
padding: 5px;
border-radius: 10px;
margin: 0;
${media.mobile`
    width: 100%;
`};
${media.desktop`
    width: 40%;
`};
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
font-family: "Montserrat";
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
                <CardLink to={props.github} target="_blank">Source Code</CardLink>
                <CardLink to={props.demo} target="_blank">Demo</CardLink>
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
                        description="The Sports Report is a web application developed using React.js and Rails that provides curated sports articles towards your favorite players and teams. Instead of searching various news sources, all the sources are combined into one place."
                        frontend="https://github.com/kdshah6593/the-sports-report-frontend"
                        backend="https://github.com/kdshah6593/the-sports-report-backend"
                        hosted="https://the-sports-report.herokuapp.com"
                        image={SportsReport}
                    />
                    <LiveProject
                        title="StudyDecks"
                        description="StudyDecks is a web application developed using JavaScript on the Frontend and Rails as an API as the backend. This web app is intended as a simple study tool for users. A user can have multiple decks and within each deck they can create flashcards and go between them. A user can flip the flashcard over, thus they can quiz themselves."
                        frontend="https://github.com/kdshah6593/studydecks-frontend"
                        backend="https://github.com/kdshah6593/studydecks-backend"
                        hosted="https://studydecks.herokuapp.com"
                        image={StudyDecks}
                    />
                    <NotLiveProject
                        title="Stock Tracker"
                        description="Stock Tracker is a web application developed using Ruby on Rails incorporating CRUD and MVC principles. This web app is intended for users to keep track of their many stock portfolios in one place maintain watchlists, and view stock information."
                        image={StockTracker}
                        github="https://github.com/kdshah6593/Stock-Tracker"
                        demo="https://drive.google.com/file/d/1uMDyndoxl7-d373by1DjaFMtbO7DHJJ4/view?usp=sharing"
                    />
                    <NotLiveProject
                        title="FiTracker"
                        description="FITracker is a web application developed using Sinatra and ActiveRecord incorporating CRUD and MVC principles. The application can sign up and login users who can add workouts to their profile. Per individual workout, a user can add exercises. Users can view others' exercises as well."
                        image={FiTracker}
                        github="https://github.com/kdshah6593/FITracker"
                        demo="https://drive.google.com/file/d/1JbTliZkDOcBSHOe_QzTgkxQUMW5b3OzN/view?usp=sharing"
                    />
                    <NotLiveProject
                        title="League of Legends Champion Finder"
                        description="This is a Command Line Interace program. New to League of Legends or just want some quick information on the Champions in League of Legends? Find out more information on the League of Legends champions to know who you want to play."
                        image={LOLChampions}
                        github="https://github.com/kdshah6593/League_of_Legends_Champions"
                        demo="https://drive.google.com/file/d/12dwHdkLuvR-bE2Yt--qefBkHF-kg5Me_/view?usp=sharing"
                    />
                </CardContainer>
            </div>
        </Layout>
    )
}

export default Projects