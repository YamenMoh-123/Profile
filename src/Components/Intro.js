import React from 'react';
import self from '../images/self.png';
import Typing from "./Typing";
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import Resume from '../download/Resume.pdf'

function Intro() {
    let messages = ["a Software Engineer", "a Network Engineer", "Cisco Certified", "Security+ Certified"];

    return (
        <div className="flex justify-center xl:mx-24 xl:block">
            <section className="pt-10 xl:pt-28 pb-2 bg-white bg-opacity-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 py-6 mx-auto max-w-screen-2xl">
                    <div className="lg:col-span-4 col-span-1">
                        <h1 className="text-7xl font-extrabold mb-3">
                            Hi I'm</h1>
                        <h1 className="text-7xl text-blue-600 font-extrabold mb-10">
                            Yamen</h1>
                        <p className="text-xl text-gray-500 ml-1 mb-6">
                            Computer Science student <br /> and aspiring software developer</p>
                        <div className="flex">
                            <a href={Resume} download="Yamen's Resume.pdf"
                               className="items-center flex px-2 py-1 bg-black bg-opacity-75 text-white text-base font-medium border border-gray-300 rounded-lg hover:scale-110">
                                My Resume
                            </a>
                            <div className="flex pt-1 pl-1">
                                <a href="https://github.com/YamenMoh-123" className="hover:scale-110">
                                    <img className="w-16 h-16 mx-3 my-2" src={github} alt="Github"></img>
                                </a>
                                <a href="https://www.linkedin.com/in/yamenmohi" className="hover:scale-110">
                                    <img className="w-16 h-16 mx-3 my-2" src={linkedin} alt="LinkedIn"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-1 text-center lg:place-self-center lg:my-0 my-10">
                        <Typing messages={messages}/>
                    </div>
                    <div className="lg:col-span-4 lg:flex hidden justify-end">
                        <img src={self} alt="Yamen" className="max-w-none"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro;
