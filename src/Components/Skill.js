import React from 'react';

function Skill(props) {
    return (
        <div className="hover:scale-125 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-2 sm:m-4 md:m-8 p-2 sm:p-3 md:p-5 bg-gradient-to-r from-gray-200 to-amber-200">
            <img src={props.image} className="w-full h-full"/>
        </div>
    );
}

export default Skill;
