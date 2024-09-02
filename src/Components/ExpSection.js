import React from 'react';
import Separation from "./Separation";

function ExpSection() {
    return (
        <div>
            <Separation title="Experience"/>
            <div className="flex flex-wrap justify-center p-4">

                <div className="flex flex-col sm:flex-row px-5 mx-2 xl:mx-20 mt-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full">
                    <div className="sm:w-1/4 flex sm:items-center p-4">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight">
                            IT Support Specialist
                        </h5>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between w-full">
                        <ul className="flex flex-col sm:flex-row items-start sm:justify-between w-full p-4">
                            <li className="flex-1 my-4 sm:mx-4">
                                Lenovo Warranty Support with over 200 satisfied customers around the Windsor-Essex region
                            </li>
                            <li className="flex-1 my-4 sm:mx-4 hidden sm:block">
                                Installation and Configuration of Cisco switches, routers, and access points for multiple businesses
                            </li>
                            <li className="flex-1 my-4 sm:mx-4 hidden sm:block">
                                5+ years of experience in customer service and component level technical repair
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row px-5 mx-2 xl:mx-20 mt-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full">
                    <div className="sm:w-1/4 flex sm:items-center p-4">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight">
                            Teaching Assistant
                        </h5>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between w-full">
                        <ul className="flex flex-col sm:flex-row items-start sm:justify-between w-full p-4">
                            <li className="flex-1 my-4 sm:mx-4">
                                Assisted 3 core courses with over 200 students each in the Computer Science program
                            </li>
                            <li className="flex-1 my-4 sm:mx-4 hidden sm:block">
                                Hosted weekly office hours and lab sessions to assist students with Programming and Algorithms I and Computer Architecture
                            </li>
                            <li className="flex-1 my-4 sm:mx-4 hidden sm:block">
                                Providing 1-on-1 tutoring for students struggling with course material to help improve grades
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExpSection;
