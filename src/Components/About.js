import React from 'react';

function About(props) {
    return (
        <div>
            <section>
                <div className="py-8 max-w-screen-full text-center px-8 lg:px-12 xl:px-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:text-5xl md:text-6xl">
                        About Me</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 sm:text-xl md:text-2xl lg:px-16 xl:px-32 dark:text-gray-400">
                        Having been immersed in the tech field for over 6 years and coding for over
                        4, I have developed a strong passion for software development.
                        From simple games to complex applications, the development field as a whole
                        has always fascinated me. Recently, I have been exploring the Computer Science
                        field, from front-end and back-end development to networking and security.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;
