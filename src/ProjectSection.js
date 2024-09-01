import React from 'react';
import Project from "./Project";
import app from './images/app.png'
import chess from './images/chess.png'
import Separation from "./Separation";

function ProjectSection(props) {

    let projectList = [
        {title: "Suggestify", description: "test", link: "", stack: "", image: app},
        {title: "Online chess", description: "test", link: "", stack: "", image: chess},
        {title: "Personal Blog", description: "test", link: "", stack: "", image: app},
    ]

    return (
        <div>
        <Separation title="Projects"/>
        <div className="flex p-3 m-4">
            {projectList.map((project, index) => (
                <div className="grid-cols-3 p-3" key={index}>
                    <Project title={project.title} description={project.description} image={project.image} stack={project.stack}/>
                </div>))
            }

        </div>
        </div>
    );
}

export default ProjectSection;