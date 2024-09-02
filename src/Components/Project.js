import React from 'react';

function Project(props) {
    return (
        <div className="relative xl:h-56 flex group bg-clip-border rounded-xl bg-gray-50 text-gray-700 shadow-lg w-full flex-row min-h-64">
            <div className="flex flex-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out rounded-xl">
                <div className="relative flex-none w-2/5 overflow-hidden rounded-l-xl">
                    <img src={props.image} alt="project image" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-between flex-grow p-6 overflow-hidden">
                    <div>
                        <h4 className="text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 mb-2 overflow-hidden text-ellipsis" style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
                            {props.title}
                        </h4>
                        <p className="text-base leading-relaxed text-gray-700 mb-2 overflow-hidden text-ellipsis" style={{ maxHeight: '4.5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {props.description}
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 overflow-auto" style={{ maxHeight: '4rem' }}>
                        Technologies:<br />
                        {props.stack}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gray-300">
                <div className="p-4 text-center">
                    <a href={props.link}
                       className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-gray-900 uppercase transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 justify-center align-middle"
                       style={{ textDecoration: 'none' }}>
                        GitHub Link
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
