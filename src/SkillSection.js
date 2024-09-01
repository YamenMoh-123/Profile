import React from 'react';
import Skill from "./Skill";
import python from './images/python.png';
import js from './images/js.png';
import java from './images/java.png';
import ts from './images/ts.png';
import c from './images/c.png';
import sql from './images/sql.png';
import react from './images/react.png';
import tailwind from './images/tailwind.png';
import node from './images/node.png';
import bootstrap from './images/bootstrap.png';
import html from './images/html.png';
import css from './images/css.png';
import mongo from './images/mongo.svg';
import redis from './images/redis.png';
import php from './images/php.png';
import git from './images/git.png';
import j from './images/j.png';


function SkillSection(props) {

    let skill_1=[
        python,
        js,
        ts,
        java,
        c,
        sql,
        html,
        css
    ]

    let skill_2=[
        tailwind,
        react,
        node,
        bootstrap,
        mongo,
        redis,
        php,
        git,
    ]

    return (
        <div className="m-24">
            <p className="text-5xl font-extrabold">Languages</p>
            <div className="flex">
                {skill_1.map((skill) => {
                    return (
                        <Skill image={skill}/>
                    )
                })
                }
            </div>
            <p className="text-5xl font-extrabold">Development</p>
            <div className="flex">
                {skill_2.map((skill) => {
                    return (
                        <Skill image={skill}/>
                    )
                })
                }
            </div>
        </div>
    );
}

export default SkillSection;