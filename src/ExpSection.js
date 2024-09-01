import React from 'react';
import Separation from "./Separation";


function ExpSection() {


    return (
        <div>
            <Separation title="Experience"/>
        <div className="flex flex-wrap m-10">

            <div className="flex p-10 mt-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-10">
                <div className="w-1/4">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight">
                        IT Support Specialist
                    </h5>
                </div>

                <div>
                    <ul className="flex">
                        <li className="m-4 w-1/4 pl-8">
                            Lenovo Warranty Support with over 200 satisfied customers around the Windsor-Essex region
                        </li>
                        <li className="m-4 w-1/4">
                            Installation and Configuration of Cisco switches, routers, and access points for multiple business
                        </li>
                        <li className="m-4 w-1/4">
                            5+ years of experience in customer service and component level technical repair
                        </li>


                    </ul>
                </div>
            </div>




            <div className="flex p-10 mt-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-10">
                <div className="w-1/4">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight">
                        Teaching Assistant
                    </h5>
                </div>

                <div>
                    <ul className="flex">
                        <li className="m-4 w-1/4 pl-8">
                            Assisted 3 core courses with over 200 students each in the Computer Science program
                        </li>
                        <li className="m-4 w-1/4">
                            Hosted weekly office hours and lab sessions to assist students with, Programming and Algorithms I and Computer Architecure
                        </li>
                        <li className="m-4 w-1/4">
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