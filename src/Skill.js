import React from 'react';

function Skill(props) {
    return (
        <div className="hover:scale-125 rounded-full w-24 h-24 m-8 p-5 bg-gradient-to-r from-gray-200 to-amber-200">
            <img src={props.image}/>
        </div>
    );
}

export default Skill;
