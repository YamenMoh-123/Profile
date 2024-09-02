import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <nav className="py-2 lg:py-4">
                    <div className="flex justify-between mx-10 xl:mx-24 items-center max-w-screen-full">
                        <a href="/public" className="flex items-center">
                            <img src={logo} className="h-6 sm:h-9" alt="Logo"/>
                        </a>
                        <ul className="hidden lg:flex flex-row space-x-6 items-center">
                            <li><a href="#Skills" className="text-lg hover:text-blue-600">Skills</a></li>
                            <li><a href="#Projects" className="text-lg hover:text-blue-600">Projects</a></li>
                            <li><a href="#Education" className="text-lg hover:text-blue-600">Education</a></li>
                            <li><a href="#Experience" className="text-lg hover:text-blue-600">Experience</a></li>
                        </ul>
                        <button onClick={() => navigate('/Contact')} className="text-xl p-2 hover:bg-gray-600 hover:text-white rounded-lg">Contact</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
