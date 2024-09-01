import React from 'react';
import self from './images/self.png';
import Typing from "./Typing";
import github from './images/github.png';
import linkedin from './images/linkedin.png';




function Intro() {

    let messages=["hello"]

    return (
        <div>
            <section className="pl-24 pt-32 pb-4 bg-white bg-opacity-0">
                <div className="grid max-w-screen-2xl py-8 mx-auto lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-5">
                        <h1 className="max-w-2xl mb-3 text-7xl font-extrabold tracking-tight leading-none">
                            Hi I'm</h1>
                        <h1 className="max-w-2xl mb-10 text-7xl text-blue-600 font-extrabold ">Yamen</h1>
                        <p className="max-w-2xl ml-1 mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            A LITTLE aboutme
                        </p>

                        <div className="flex">
                            <a href="#"
                               className="inline-flex items-center justify-center px-5 py-3 text-white bg-black bg-opacity-75 text-base font-medium text-center border border-gray-300 rounded-lg hover:scale-110  dark:border-gray-700">
                                My Resume
                            </a>
                            <div className="pt-1 pl-1 flex">
                                <a href="" className="hover:scale-110">
                                    <img className="my-2 mx-3 w-16 h-16" src={github}></img>
                                </a>
                                <a href="" className="hover:scale-110">
                                    <img className="my-2 mx-3 w-16 h-16" src={linkedin}></img>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="items-center justify-center content-center">
                        <Typing messages={messages}/>

                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pl-60">
                        <img src={self} alt="Yamen"/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Intro;
