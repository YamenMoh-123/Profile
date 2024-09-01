import React from 'react';







function Project(props) {
    return (
        <div className="relative flex group bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[48rem] flex-row">
            <div className="flex opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out rounded-xl">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img src={props.image} alt="card-image" className="object-cover w-full h-full"/>
                </div>
                <div className="p-6">
                    <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {props.title}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {props.description}
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-center p-4">
                    <p className="font-sans text-lg font-semibold text-gray-900">{props.stack}</p>
                    <a href={props.link} className="inline-block">
                        <button
                            className="flex items-center gap-2 px-6 py-3 p-5 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            GitHub Link
                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Project;
