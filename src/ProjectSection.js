import React from 'react';
import Project from "./Project";
import app from './images/app.png'
import chess from './images/chess.png'
import blog from './images/blog.png'
import mario from './images/mario.png'
import RL from './images/RL.png'
import zelda from './images/zelda.png'
import Separation from "./Separation";

function ProjectSection() {

    let projectList = [
        {title: "Suggestify", description: "test", link: "https://github.com/Suggestify/SuggestifyApp", stack: "", image: app},
        {title: "Online chess", description: "test", link: "https://github.com/YamenMoh-123/Chess_Client", stack: "", image: chess},
        {title: "Personal Blog", description: "test", link: "https://github.com/YamenMoh-123/Portfolio", stack: "", image: blog},
        {title: "Mario Replica", description: "test", link: "https://github.com/YamenMoh-123/Mario_Game", stack: "", image: mario},
        {title: "Reinforcement Learning Traffic", description: "", link: "https://github.com/YamenMoh-123/RL-Traffic-Optimizer", stack: "", image: RL},
        {title: "Zelda-Style Game", description: "test", link: "", stack: "", image: zelda},
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