import React from 'react';
import Header from "./Header";
import Intro from "./Intro";
import CertSection from "./CertSection";
import ExpSection from "./ExpSection";
import ProjectSection from "./ProjectSection";
import back from "./images/back.jpg";
import About from "./About";
import SkillSection from "./SkillSection";
import Footer from "./Footer";

function Home(props) {
    const appStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255,255, 0.5), rgba(255, 255, 255, 0.5)), url(${back})`,
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        backgroundSize: 'contain'

    };

    return (
        <div style={appStyle}>
            <Header/>
            <Intro></Intro>
            <About/>
            <section id="Skills"><SkillSection/></section>
            <section id="Education"> <CertSection/></section>
            <section id="Experience"><ExpSection/></section>
            <section id="Projects"><ProjectSection/></section>
            <Footer/>
        </div>
    );
}

export default Home;