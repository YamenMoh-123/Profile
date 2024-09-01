import React from 'react';
import self from './images/self.png';
import Typing from "./Typing";
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import Resume from './download/Resume.pdf'



function Intro() {

    let messages=["a Software Engineer", "a Network Engineer", "Cisco Certified", "Security+ Certified"]

    return (
        <div>
            <section className="pl-24 pt-32 pb-4 bg-white bg-opacity-0">
                <div className="grid max-w-screen-2xl py-8 mx-auto lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-4">
                        <h1 className="max-w-2xl mb-3 text-7xl font-extrabold">
                            Hi I'm</h1>
                        <h1 className="max-w-2xl mb-10 text-7xl text-blue-600 font-extrabold ">Yamen</h1>
                        <div className="grid max-w-1/12">
                            <p className="max-w-1/12 text-xl ml-1 mb-6 text-gray-500">
                                Computer Science student <br></br> and aspiring software developer </p>
                        </div>

                        <div className="flex">
                            <a href={Resume} download="Yamen's Resume.pdf"
                               className="inline-flex items-center justify-center px-5 py-3 text-white bg-black bg-opacity-75 text-base font-medium text-center border border-gray-300 rounded-lg hover:scale-110  dark:border-gray-700">
                                My Resume
                            </a>
                            <div className="pt-1 pl-1 flex">
                                <a href="https://github.com/YamenMoh-123" className="hover:scale-110">
                                    <img className="my-2 mx-3 w-16 h-16" src={github}></img>
                                </a>
                                <a href="https://www.linkedin.com/in/yamenmohi" className="hover:scale-110">
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
