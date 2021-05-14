import React from 'react';
import "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <div id="project-body">
                <h1 className="marker-font" id="contact-header">Projects</h1>
                <div id="projects">
                    <div className="project-card">
                        <h3>Project Title</h3>
                        <p>Product Image</p>
                        <p>Product Description</p>
                    </div>
                    <div className="project-card">
                        <h3>Project Title</h3>
                        <p>Product Image</p>
                        <p>Product Description</p>
                    </div>
                    <div className="project-card">
                        <h3>Project Title</h3>
                        <p>Product Image</p>
                        <p>Product Description</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects