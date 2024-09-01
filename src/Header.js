import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from './images/logo.png';



function Header() {

    const navigate = useNavigate();


    return (
        <div>
            <header>
                <nav className="border-gray-200 lg:px-6 py-5">
                    <div className="flex flex-wrap px-20 justify-between items-center mx-auto max-w-screen-2xl">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9"
                                 alt="Logo"/>
                        </a>
                        <div className="flex items-center">
                            <a href="#"
                               className="text-white bg-primary-700">
                                Contact</a>
                        </div>
                        <div className="flex justify-between items-center w-4/5 pl-20">
                            <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#Skills"
                                       className="block text-lg py-2 pr-4 pl-3 hover:text-blue-600">
                                        Skills</a>
                                </li>
                                <li>
                                    <a href="#Projects"
                                       className="block text-lg py-2 pr-4 pl-3 hover:text-blue-600">
                                        Projects</a>
                                </li>
                                <li>
                                    <a href="#Education"
                                       className="block text-lg py-2 pr-4 pl-3 hover:text-blue-600">
                                        Education</a>
                                </li>
                                <li>
                                    <a href="#Experience"
                                       className="block text-lg py-2 pr-4 pl-3 hover:text-blue-600">
                                        Experience</a>
                                </li>

                            </ul>
                            <button onClick={() => navigate('./Contact')}
                                    className="justify-end items-end mr-8 font-medium text-xl p-3 hover:bg-gray-600 hover:text-white rounded-lg">
                            Contact

                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;