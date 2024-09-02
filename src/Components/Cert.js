import React from 'react';



function Cert(props) {
    return (
            <div className="min-w-72 xl:w-80 xl:h-56 p-6 bg-gray-50 border rounded-lg shadow ">
                <svg className="w-14 h-14 text-gray-800 mb-3" aria-hidden="true"
                      fill="currentColor" viewBox="0 0 20 20">
                    <image href={props.img} width="100%" height="100%"/>
                </svg>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
                <a href={props.link} className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Validation Link
                </a>
            </div>

    );
}

export default Cert;