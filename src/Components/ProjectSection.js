import React from 'react';
import Project from "./Project";
import app from '../images/app.png'
import chess from '../images/chess.png'
import blog from '../images/blog.png'
import mario from '../images/mario.png'
import RL from '../images/RL.png'
import zelda from '../images/zelda.png'
import Separation from "./Separation";

function ProjectSection() {

    let projectList = [
        {title: "Suggestify", description: "An AI powered mobile recommender chat app", link: "https://github.com/Suggestify/SuggestifyApp", stack: "React-Native  Node  Express  Redis  MongoDB", image: app},
        {title: "Online chess", description: "A Multiplayer Lan chess game", link: "https://github.com/YamenMoh-123/Chess_Client", stack: "Java Swing Socket-Programming ", image: chess},
        {title: "Personal Blog", description: "A full-stack website for blog posts, book lists, and more", link: "https://github.com/YamenMoh-123/Portfolio", stack: "React Node Express MongoDB", image: blog},
        {title: "Mario Replica", description: "A replica of the 1984 Mario side scroller game", link: "https://github.com/YamenMoh-123/Mario_Game", stack: "Python PyGame OOP", image: mario},
        {title: "Reinforcement Learning Traffic", description: "A reinforcement learning model to optimize traffic flow", link: "https://github.com/YamenMoh-123/RL-Traffic-Optimizer", stack: "Python PyGame", image: RL},
        {title: "Zelda-Style Game", description: "A top down MMORPG zelda-like game", link: "", stack: "Java Swing OOP", image: zelda},
    ]

    return (
        <div>
            <Separation title="Projects"/>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 m-4 mb-10">
                {projectList.slice(0, 3).map((project, index) => (
                    <div className="p-3" key={index}>
                        <Project title={project.title} description={project.description} link={project.link} image={project.image} stack={project.stack}/>
                    </div>
                ))}
                {projectList.slice(3).map((project, index) => (
                    <div className="p-3 hidden sm:block" key={index + 3}>
                        <Project title={project.title} description={project.description} link={project.link} image={project.image} stack={project.stack}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
