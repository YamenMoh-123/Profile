import React from 'react';
import Cert from "./Cert";
import cisco from './images/cisco.png';
import comptia from './images/comptia.png';
import Separation from "./Separation";

function CertSection() {

    let certList = [
        {title: "CCNP Specialist", image: cisco, description: "CCNP ENCOR 350-401", link: ""},
        {title: "CCNA", image: cisco, description: "CCNA 200-301", link: ""},
        {title: "Security+", image: comptia, description: "CompTIA Security+ SY0-701", link: ""}]


    return (
        <div>
            <Separation title="Education"/>
            <div className="flex gap-4 w-full justify-between">
                <div className="m-4">
                    lorem ipsum
                </div>

                <div className="flex">
                {certList.map((cert, index) => (
                    <div className="m-3">
                        <Cert key={index} title={cert.title} img={cert.image} description={cert.description} link={cert.link}/>
                    </div>
                ))}
                </div>

            </div>
        </div>
    );
}

export default CertSection;